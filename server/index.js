const express = require('express');
const cors = require("cors");
const { connectToMongoDB } = require('./database');
const routes = require('./routes/index');

const app = express();
app.use(cors());
connectToMongoDB();

app.use(express.json());
app.use('/api', routes)

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})