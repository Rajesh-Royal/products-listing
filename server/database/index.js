const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = () => {

    const mongoString = process.env.MONGODB_DB_URL;
    mongoose.connect(mongoString);
    const database = mongoose.connection;
    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', () => {
        console.log('Database Connected');
    })

    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', () => {
        console.log('Database Connected');
    })
}

module.exports = {
    connectToMongoDB
}