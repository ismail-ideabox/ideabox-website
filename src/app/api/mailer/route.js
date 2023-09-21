import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function verifyCaptchaAction(token) {
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
    }
  );
  if (res?.data?.score > 0.5) {
    return true;
  } else {
    return false;
  }
}

export async function POST(req, res) {
  const body = await req.json();

  const { name, companyName, email, phone, message, gReCaptchaToken } = body;
  const verify = verifyCaptchaAction();

  if (verify) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply.ideabox.pk@gmail.com",
        pass: "hkes sazq bouz shhh",
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
    } catch (error) {}
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
