const express = require('express');

const router = express.Router()

//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all catalogs
router.get('/catalogs', (req, res) => {
    res.send('Get All API')
})

// get single catalog
router.get('/catalogs/:catalogId', (req, res) => {
    res.send(req.params.catalogId)
})


module.exports = router;