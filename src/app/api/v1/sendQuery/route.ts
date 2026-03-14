import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {

    const { name, email, phone, subject, comments } = await req.json();

    const filePath = path.join(process.cwd(), "src/app/api/v1/sendQuery/contact-email.html");

    let html = fs.readFileSync(filePath, "utf8");

    html = html
        .replaceAll("{{name}}", name)
        .replaceAll("{{email}}", email)
        .replaceAll("{{phone}}", phone)
        .replaceAll("{{subject}}", subject)
        .replaceAll("{{comments}}", comments)
        .replaceAll("{{year}}", new Date().getFullYear().toString());

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_EMAIL_USER,
            pass: process.env.NEXT_EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: email,
        to: process.env.NEXT_EMAIL_USER,
        subject: subject || "Portfolio Message",
        html: html
    });

    return Response.json({ success: true });
}