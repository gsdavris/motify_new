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
  let nodemailer = require("nodemailer");
  const mailData = {
    from: "info@motify.gr",
    to: ["gsdavris@gmail.com", "komnino0@gmail.com"],
    subject: `Motify: Message From ${req.body.firstName} ${req.body.lastName}`,
    text:
      req.body.message +
      " | Sent from: " +
      req.body.email +
      " | Phone number: " +
      req.body.phoneNumber,
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

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        return res.status(500).json({
          message: err.message,
          sent: false
        });
      } else {
        return res.status(200).json({
          message: info,
          sent: true
        });
      }
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}
