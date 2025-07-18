'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles the contact form submission.
 */
import { ai } from '@/ai/genkit';
import nodemailer from 'nodemailer';
import { ContactFormInputSchema, ContactFormOutputSchema, type ContactFormInput, type ContactFormOutput } from '@/lib/types';


const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    console.log('Received contact form submission:', input);

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error('SMTP environment variables are not set.');
      return {
        success: false,
        message: 'Server configuration error. Could not send email.',
      };
    }


    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${input.name}" <${process.env.SMTP_FROM_EMAIL || input.email}>`,
            to: process.env.SMTP_TO_EMAIL,
            replyTo: input.email,
            subject: `New message from ${input.name} via Charles Portfolio`,
            text: input.message,
            html: `<p>You have a new message from <strong>${input.name}</strong> (${input.email}):</p><p>${input.message}</p>`,
        });

        return {
            success: true,
            message: 'Your message has been sent successfully!',
        };
    } catch (error) {
        console.error('Failed to send email:', error);
        return {
            success: false,
            message: 'Failed to send your message. Please try again later.',
        };
    }
  }
);


export async function sendContactMessage(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFlow(input);
}
