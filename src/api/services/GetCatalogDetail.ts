import CatalogDB from "../../db/products.json";
import { ICatalog } from "./GetCatalogLists";

export const getCatalogDetail = (catlogId: string): Promise<ICatalogDetailAPIResponse> => {
    return new Promise((resolve, reject) => {
        let catalog = CatalogDB.filter((product) => product.Id === catlogId);
        if (catalog.length > 0) {
            resolve({
                message: "Catalog List fetched Successfully",
                data: catalog[0],
                status: 200
            });
        } else {
            reject({
                message: "Catalog Dosent exist.",
                data: {},
                status: 404
            })
        }
    })
}

export interface ICatalogDetailAPIResponse {
    message: string;
    status: number;
    data: ICatalog
}