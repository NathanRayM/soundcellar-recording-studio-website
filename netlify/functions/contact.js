import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req) => {
  if (req.method !== "POST") {
    return Response.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !phone || !email || !message) {
      return Response.json(
        {
          message:
            "Please complete all required fields before submitting the form.",
        },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Sound Cellar Recording <contact@soundcellarrecording.com>",
      to: "soundcellarrecording@yahoo.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          message:
            "Something went wrong sending your message. Please try again.",
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        message:
          "Thanks! Your message has been received. We'll contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact function error:", error);

    return Response.json(
      {
        message: "Something went wrong sending your message. Please try again.",
      },
      { status: 500 }
    );
  }
};
