const express = require('express');
const { connectToMongoDB } = require('./database');
const routes = require('./routes/index');

const app = express();
connectToMongoDB();

app.use(express.json());
app.use('/api', routes)

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})