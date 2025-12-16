export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "POST":
      return await emailSend(req, res);
    default: {
      return res.status(200).end();
    }
  }
}

async function emailSend(req, res) {
  const nodemailer = require("nodemailer");
  const mailData = {
    from: "info@motify.gr",
    to: ["gsdavris@gmail.com", "komnino0@gmail.com"],
    subject: `Motify: Message From ${req.body.firstName} ${req.body.lastName}`,
    text: `${req.body.message} | Sent from: ${req.body.email} | Phone number: ${req.body.phoneNumber}`,
    html: `
    <div>
      <p>${req.body.message}</p>
      <p>
        Sent from: ${req.body.firstName} ${req.body.lastName}
        <br/>Phone number: ${req.body.phoneNumber}
        <br/>Email: ${req.body.email}
      </p>
    </div>`
  };

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "mail.motify.gr",
      auth: {
        user: process.env.CONTACT_MAIL_USER,
        pass: process.env.CONTACT_MAIL_PASS
      },
      secure: true,
      disableFileAccess: true,
      disableUrlAccess: true,
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    const info = await transporter.sendMail(mailData);

    return res.status(200).json({
      message: info,
      sent: true
    });
  } catch (error) {
    // Bubble up SMTP/auth errors to the client for easier debugging
    return res.status(500).json({
      message: error?.message || "Failed to send mail",
      sent: false
    });
  }
}
