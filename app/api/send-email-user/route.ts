import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { fullName ,email, phone, nationality,countryToStudy,interestedCourse } = await req.json();

   
    const transporter = nodemailer.createTransport({
  host: "mail.greensellers.co.uk",
  port: 587,
  secure: false, // IMPORTANT
  auth: {
    user: "info@ieeuk.com",
    pass: "London@2024",
  },
  
});

    // Render ejs template
    const templatePath = path.join(
      process.cwd(),
      "static/email_template/contact_user_template.ejs"
    );
    
    const html = await ejs.renderFile(templatePath, {
      fullName,
      email,
      
    });

    const mailOptions = {
      from: `"IEEUK" <info@ieeuk.com>`, 
      to: email,
      subject: `Thank You for Contacting IEEUK`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}