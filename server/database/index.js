const mongoose = require('mongoose');
const createCatalogs = require("../services/create-catalogs.service");
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
        // create dummy db
        createCatalogs().then((res) => {
            console.log("Catalog databases created successfully");
        }).catch((err) => {
            console.error("failed to create catalogs db", err);
        })
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