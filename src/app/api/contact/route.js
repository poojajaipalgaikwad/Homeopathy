import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
export async function POST(req)
{
   
    try{
         const body = await req.json();
         const {name , number, email, subject, message } = body;

         const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true, // true for port 465
                    auth: {
                        user: process.env.SMTP_USER, // Your email address
                        pass: process.env.SMTP_PASS, // App password or SMTP password
                    },
         })

            await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_USER}>`,
            to: process.env.RECEIVER_EMAIL, // Your inbox address
            subject: `New Contact Form Message: ${subject}`,
            html: `
                <div style="font-family:sans-serif; line-height:1.6;">
                <h2>New Contact Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Number:</strong> ${number}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong><br/>${message}</p>
                </div>
            `,
            });
                return NextResponse.json({ success: true, message: "Email sent successfully!" });
                } catch (error) {
                    console.error("Email Error:", error);
                    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
                }

    }
