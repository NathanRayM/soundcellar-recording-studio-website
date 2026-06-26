import "dotenv/config";
import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
const PORT = 5050;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sound Cellar backend is running");
});

app.post("/api/contact", async (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res.status(400).json({
      message:
        "Please complete all required fields before submitting the form.",
    });
  }

  const { error } = await resend.emails.send({
    from: "Sound Cellar Recording <contact@soundcellarrecording.com>",
    to: "soundcellarrecording@yahoo.com",
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    `,
  });

  if (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong sending your message. Please try again.",
    });
  }

  res.json({
    message:
      "Thanks! Your message has been received. We'll contact you shortly.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
