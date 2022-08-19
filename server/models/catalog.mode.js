const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Id: {
        required: true,
        type: String
    },
    Maker: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    },
    Url: {
        required: false,
        type: String
    },
    Title: {
        required: true,
        type: String
    },
    Description: {
        required: true,
        type: String
    },
    Ratings: {
        required: false,
        type: [Number],
        default: null,
    }
})

module.exports = mongoose.model('catalogs', dataSchema)