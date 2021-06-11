import SMTPTransport = require("nodemailer/lib/smtp-transport")
import nodemailer from "nodemailer"
import Mail = require("nodemailer/lib/mailer")
import { mailTemplate } from "../types/mail"
import dotenv from 'dotenv'

dotenv.config()

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
       user: process.env.NODEMAILER_USER,
       pass: process.env.NODEMAILER_PASS
    },
    tls: { ciphers: "SSLv3" }
  })
  


export async function writeEmail(mail: mailTemplate) {

    let mailContent: Mail.Options = {
        from: mail.from,
        to: mail.to,
        subject: mail.subject,
        text: mail.text,
        html: mail.html
    }

    transporter.sendMail(mailContent, (error: Error | null, info: any) => {

        if(error) {

            throw new Error(error.message)
        } else {
            console.log("E-mail enviado!")
        }

    })

}

