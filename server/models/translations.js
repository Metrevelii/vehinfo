const mongoose = require('mongoose');

const translationsSchema = mongoose.Schema({
    text1ru: {
        required: true,
        type: String,
    },
    text1az: {
        required: true,
        type: String,
    },
    text2ru: {
        required: true,
        type: String,
    },
    text2az: {
        required: true,
        type: String,
    },
    text3ru: {
        required: true,
        type: String,
    },
    text3az: {
        required: true,
        type: String,
    },
    text4ru: {
        required: true,
        type: String,
    },
    text4az: {
        required: true,
        type: String,
    },
    text5ru: {
        required: true,
        type: String,
    },
    text5az: {
        required: true,
        type: String,
    },
    text6ru: {
        required: true,
        type: String,
    },
    text6az: {
        required: true,
        type: String,
    },
    text7ru: {
        required: true,
        type: String,
    },
    text7az: {
        required: true,
        type: String,
    },
    text8ru: {
        required: true,
        type: String,
    },
    text8az: {
        required: true,
        type: String,
    },
    text9ru: {
        required: true,
        type: String,
    },
    text9az: {
        required: true,
        type: String,
    },
    text10ru: {
        required: true,
        type: String,
    },
    text10az: {
        required: true,
        type: String,
    },
    text11ru: {
        required: true,
        type: String,
    },
    text11az: {
        required: true,
        type: String,
    },
    text12ru: {
        required: true,
        type: String,
    },
    text12az: {
        required: true,
        type: String,
    },
    text13ru: {
        required: true,
        type: String,
    },
    text13az: {
        required: true,
        type: String,
    },
    text14ru: {
        required: true,
        type: String,
    },
    text14az: {
        required: true,
        type: String,
    },
    text15ru: {
        required: true,
        type: String,
    },
    text15az: {
        required: true,
        type: String,
    },
    text16ru: {
        required: true,
        type: String,
    },
    text16az: {
        required: true,
        type: String,
    },
    text17ru: {
        required: true,
        type: String,
    },
    text17az: {
        required: true,
        type: String,
    }
})

const Translation = mongoose.model('Translations', translationsSchema)

module.exports = { Translation };