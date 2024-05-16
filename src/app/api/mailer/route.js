import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function verifyCaptchaAction(token) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: "POST",
      body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
    }
  );
  const data = await response.json();
  return data?.score > 0.5;
}

export async function POST(req, res) {
  const body = await req.json();

  const { name, companyName, email, phone, message, gReCaptchaToken } = body;

  const verify = await verifyCaptchaAction(gReCaptchaToken);

  if (verify) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply.ideabox.pk@gmail.com",
        pass: "vpsy cmrh bxhe lhlk",
      },
    });
    let mailOptions = {
      from: email,
      to: "noreply.ideabox.pk@gmail.com",
      cc: "hello@ideabox.technology",
      replyTo: email,
      subject: companyName,
      text: `Name: ${name}\nCompany Name: ${companyName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };
    try {
      await transporter.sendMail(mailOptions);
      return new NextResponse(
        JSON.stringify({
          status: "success",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: error.message,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "recaptcha token is invalid ",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
