const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();


let transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

const registerEmail = async(userEmail, user) => {
    try {
        const emailToken = user.generateRegisterToken();

        let mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'Vehicle info',
                link: `${process.env.EMAIL_MAIL_URL}`,
            }
        })

        const email = {
            body: {
                name: userEmail,
                intro: 'Welcome to Vehinfo ! We\`re very excited to have you on board',
                action: {
                    instructions: 'Click the link to activate your account',
                    button: {
                        color: '#1a73e8',
                        text: 'Validate your account',
                        link: `${process.env.SITE_DOMAIN}verification?t=${emailToken}`
                    }
                }
            }
        }

        let emailBody = mailGenerator.generate(email);
        let message = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: "Welcome to vehinfo",
            html: emailBody
        };

        await transporter.sendMail(message);

    } catch (error) {
        throw error;
    }
}


module.exports = {
    registerEmail
}
