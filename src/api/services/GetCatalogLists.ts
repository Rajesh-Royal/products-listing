import CatalogDB from "../../db/products.json";

export const getCatalogLists = (): Promise<ICatalogListAPIResponse> => {
    return new Promise((resolve, reject) => {
        resolve({
            message: "Catalog List fetched Successfully",
            data: CatalogDB,
            status: 200
        })
    })
}

export interface ICatalog {
    Id: string;
    Maker: string;
    img: string; Url:
    string; Title:
    string;
    Description: string;
    Ratings: number[] | null
}

export interface ICatalogListAPIResponse {
    message: string;
    status: number;
    data: ICatalog[]
}