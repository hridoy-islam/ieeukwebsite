import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export async function POST(req: Request) {
  try {
    const {
      organisationName,
      organisationType,
      website,
      country,
      city,
      contactPerson,
      email,
      phone,
      countriesRecruit,
      annualStudents,
      universities,
      message,
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
      "static/email_template/partner_application_template.ejs"
    );

    const html = await ejs.renderFile(templatePath, {
      organisationName,
      organisationType,
      website,
      country,
      city,
      contactPerson,
      email,
      phone,
      countriesRecruit,
      annualStudents,
      universities,
      message,
    });

    const mailOptions = {
      from: `"IEEUK" <info@ieeuk.com>`,
      to: "info@ieeuk.com",
      subject: `New Partner Application from ${organisationName}`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
