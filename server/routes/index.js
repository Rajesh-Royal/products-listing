const express = require('express');
const createCatalogs = require("../services/create-catalogs.service")

const router = express.Router()

//Post Method
router.post('/createCatalogs', async (req, res, next) => {
    const results = await createCatalogs(req, res, next);
    res.status(200).json({ data: results, message: "Get catalogs list successfully", status: 200 });
})

//Get all catalogs
router.get('/catalogs', (req, res, next) => {
    res.send('Get All API')
})

// get single catalog
router.get('/catalogs/:catalogId', (req, res) => {
    res.send(req.params.catalogId)
})


module.exports = router;