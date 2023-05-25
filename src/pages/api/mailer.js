import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, companyName, email, phone, message } = JSON.parse(req.body);

    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${
          process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY
        }&response=${JSON.parse(req.body).gReCaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then(async (reCaptchaRes) => {
          if (reCaptchaRes?.score > 0.5) {
            let transporter = nodemailer.createTransport({
              service: "gmail",

              auth: {
                user: "noreply.ideabox.pk@gmail.com",
                pass: "lbgfsaetsvepmqwu",
              },
            });
            let mailOptions = {
              from: email,
              to: "noreply.ideabox.pk@gmail.com",
              cc: "hello@ideabox.pk",
              replyTo: email,
              subject: companyName,
              text: `Name: ${name}\nCompany Name: ${companyName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            };
            try {
              await transporter.sendMail(mailOptions);
              res.status(200).json({ message: "Success" });
            } catch (error) {
              console.log(error);
              res.status(500).json({ message: error });
            }
          } else {
            res.status(200).json({
              status: "failure",
              message: "Google ReCaptcha Failure",
            });
          }
        });
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the form",
      });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
