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
                name: 'Cargo Logistic',
                link: `${process.env.EMAIL_MAIL_URL}`,
            }
        })

        const email = {
            body: {
                name: userEmail,
                intro: 'Welcome to Cargo Logistic ! We\`re very excited to have you on board',
              
            }
        }

        let emailBody = mailGenerator.generate(email);
        let message = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: "Welcome to Cargo Logistic",
            html: emailBody
        };

        await transporter.sendMail(message);

    } catch (error) {
        throw error;
    }
}

const sendPasswordResetEmail = async (userEmail, token) => {
    try {
        let mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'MyApp',
                link: `${process.env.EMAIL_MAIL_URL}`,
            }
        });

        const email = {
            body: {
                name: userEmail,
                intro: 'You requested a password reset. Click the link below to reset your password.',
                action: {
                    instructions: 'Click the link to reset your password.',
                    button: {
                        color: '#1a73e8',
                        text: 'Reset your password',
                        link: `${process.env.SITE_DOMAIN}password-reset?t=${token}`
                    }
                }
            }
        };

        let emailBody = mailGenerator.generate(email);
        let message = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: "Password Reset Request",
            html: emailBody
        };

        await transporter.sendMail(message);

    } catch (error) {
        throw error;
    }
};


module.exports = {
    registerEmail,
    sendPasswordResetEmail
}
