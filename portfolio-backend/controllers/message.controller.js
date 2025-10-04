import transporter from "../config/mailer.js";
import Message from "../models/Message.js";
import autoRespondTemplate from "../templates/autoRespond.template.js";

const handleMessage = async (req, res, next) => {
  try {
    const { name, email, message, honeypot } = req.body;

    if (honeypot) {
      const error = new Error("Bot detected and blocked.");
      error.statusCode = 403;
      return next(error);
    }

    if (!name || !email || !message) {
      return next(new Error("All fields are required"));
    }

    if (!process.env.EMAIL_USER || !process.env.RECEIVER_EMAIL) {
      return next(new Error("Missing email configuration in environment variables"));
    }

    // Save message
    await Message.create({ name, email, message });

    // Send notification to you
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    // Auto‑reply to sender
    await transporter.sendMail({
      from: `"Portfolio Auto-Reply" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: autoRespondTemplate({ name }),
    });

    res.status(200).json({
      message: "Message stored, email sent, and auto-response delivered ✅",
    });
  } catch (err) {
    console.error("❌ Email sending failed:", err.message);
    next(err);
  }
};

export default handleMessage;