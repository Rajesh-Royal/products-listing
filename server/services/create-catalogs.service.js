const catalogModel = require("../models/catalog.mode");
const CatalogDB = require("../database/products.json");

const createCatalogs = async (req, res, next) => {
    const promiseResults = CatalogDB.map((catalog) => {
        return new catalogModel(catalog);
    })
    let results = [];

    try {
        const dataToSave = await promiseResults.map((data) => data.save());
        await Promise.all(dataToSave).then((res) => {
            results = res;
        }).catch((error) => {
            res.status(400).json({ message: error.message })
        })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

    return results;
}


module.exports = createCatalogs;