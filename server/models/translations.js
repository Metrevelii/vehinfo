const mongoose = require('mongoose');

const translationSchema = mongoose.Schema({
    language: {
        type: String,
        required: true,
        enum: ['az', 'ru'],
    },
    translations: {
        header: {
            aboutus: { type: String, required: true },
            faq: { type: String, required: true },
            signIn: { type: String, required: true },
            calc: { type: String, required: true },
            contact: { type: String, required: true },
            dashboard: { type: String, required: true }
        },
        home: {
            text1: { type: String, required: true },
            text2: { type: String, required: true },
            shortlyaboutus: { type: String, required: true },
            text4: { type: String, required: true },
            text5: { type: String, required: true }
        },
        advantages: {
            adv1: { type: String, required: true },
            adv2: { type: String, required: true },
            adv3: { type: String, required: true },
            adv4: { type: String, required: true },
            adv5: { type: String, required: true },
        },
        footer: {
            foot1: { type: String, required: true },
            foot2: { type: String, required: true },
            foot3: { type: String, required: true }
        }
    }
});

const Translation = mongoose.model('Translation', translationSchema);

module.exports = { Translation };