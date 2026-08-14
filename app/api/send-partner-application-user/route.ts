import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export async function POST(req: Request) {
  try {
    const {
      organisationName,
      contactPerson,
      email,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.greensellers.co.uk",
      port: 587,
      secure: false,
      auth: {
        user: "info@ieeuk.com",
        pass: "London@2024",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const templatePath = path.join(
      process.cwd(),
      "static/email_template/partner_application_user_template.ejs"
    );

    const html = await ejs.renderFile(templatePath, {
      organisationName,
      contactPerson,
    });

    const mailOptions = {
      from: `"IEEUK" <info@ieeuk.com>`,
      to: email,
      subject: "Thank You for Your Partner Application - IEEUK",
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
