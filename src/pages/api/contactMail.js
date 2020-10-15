import nodemailer from "nodemailer"

const emailPass = "youremailpassword"

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: "example@email.com",
        pass: emailPass
    }
})

export default async (req, res) => {
    const { senderMail, name, content, recipientMail } = req.body

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }

    const mailerRes = await mailer({ senderMail, name, text: content, recipientMail })
    res.send(mailerRes)

}

const mailer = ({ senderMail, name, text, recipientMail }) => {
    // const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    const from = "kishorecmgx@outlook.com"
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `New message from ${senderMail}`,
        text,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}