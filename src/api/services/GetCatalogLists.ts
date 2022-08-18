import CatalogDB from "../../db/products.json";
import { Catalog } from "../models/Catalog.model";

export const getCatalogLists = (): Promise<ICatalogListAPIResponse> => {
    return new Promise((resolve, reject) => {
        resolve({
            message: "Catalog List fetched Successfully",
            data: CatalogDB,
            status: 200
        })
    })
}

export interface ICatalogListAPIResponse {
    message: string;
    status: number;
    data: Catalog[]
}