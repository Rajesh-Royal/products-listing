const catalogModel = require("../models/catalog.mode");

const getAllCatalogs = async (req, res) => {
    let results = await catalogModel.find()
    return results;
}
const getCatalogById = async (req, res) => {
    let results = await catalogModel.find()
    return results;
}

module.exports = { getAllCatalogs, getCatalogById };