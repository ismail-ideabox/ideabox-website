import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, companyName, emailAddress, phoneNo, message } = req.body;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "ideabox.pk",
      port: 465,
      secure: false,
      auth: {
        user: "info@ideabox.pk",
        pass: "Hello@Ideabox",
      },
    });

    // send mail with defined transport object
    let mailOptions = {
      from: `"${fullName}" ${emailAddress}`,
      to: emailAddress,
      subject: companyName,
      text: `Name: ${fullName}\nCompany Name: ${companyName}Email: ${emailAddress}\nPhone: ${phoneNo}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
