import { Router, type Request, type Response } from "express";
import nodemailer from "nodemailer";
import { contactSchema } from "../validators/contact";

const router = Router();

function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL,
  );
}

router.post("/", async (req: Request, res: Response) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    const message = parsed.error.issues.map((i) => i.message).join(" ");
    return res.status(400).json({ success: false, message });
  }

  const { name, email, subject, message } = parsed.data;

  if (!isSmtpConfigured()) {
    console.log("[Contact] SMTP not configured. Submission received:", {
      name,
      email,
      subject,
      messagePreview: message.slice(0, 80),
    });
    return res.status(200).json({
      success: true,
      message:
        "Message received (dev mode). Configure SMTP in backend/.env to send real emails.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("[Contact] Email send failed:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

export default router;
