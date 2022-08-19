const catalogModel = require("../models/catalog.mode");

const getAllCatalogs = async (req, res) => {
    let results = [];
    try {
        results = await catalogModel.find()
    }
    catch (error) {
        res.status(500).json({ message: error.message, status: 500, data: [] })
    }
    return results;
}
const getCatalogById = async (req, res) => {
    let results = [];
    try {
        results = await catalogModel.findOne({ Id: req.params?.catalogId })
    }
    catch (error) {
        res.status(500).json({ message: error.message, status: 500, data: [] })
    }
    return results;
}

module.exports = { getAllCatalogs, getCatalogById };