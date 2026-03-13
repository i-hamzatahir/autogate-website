import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const to = process.env.CONTACT_RECIPIENT || process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"AutoGate Website" <${process.env.SMTP_USER}>`,
      to,
      subject: "New contact form submission - AutoGate Truck Repair",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `.trim()
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}

