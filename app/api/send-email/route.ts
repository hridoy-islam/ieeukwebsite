import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      email,
      phone,
      nationality,
      countryToStudy,
      interestedCourse,
    } = await req.json();

    // Configure the transporter with your custom SMTP settings
    const transporter = nodemailer.createTransport({
      host: "mail.ieeuk.com",
      port: 465,
      secure: true, // Use true for port 465 (SSL/TLS)
      auth: {
        user: "info@ieeuk.com",
        pass: "London@2024",
      },
      tls: {
        rejectUnauthorized: false, // Helps with self-signed certs if needed
      },
    });

    // Render ejs template
    const templatePath = path.join(
      process.cwd(),
      "static/email_template/contact_template.ejs"
    );

    const html = await ejs.renderFile(templatePath, {
      fullName,
      email,
      phone,
      nationality,
      countryToStudy,
      interestedCourse,
    });

    const mailOptions = {
      from: `"IEEUK" <info@ieeuk.com>`, // authenticated sender
      to: "info@ieeuk.com", // Recipient
      subject: `New Contact Form Submission from ${name}`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
