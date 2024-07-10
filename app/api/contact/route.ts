import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email et message requis.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'marvine.gaudree.dev@gmail.com',
      text: message
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email envoyé avec succès.', body: { email, message } });
    // Redirigez vers la page d'accueil après un envoi réussi
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = (error as Error).message;
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
