import { apiEndpoints } from "../ApiEndpoints";
import HTTPService from "../HttpService";
import { Catalog } from "../models/Catalog.model";

export const getCatalogLists = (): Promise<ICatalogListAPIResponse> => {
    console.log(process.env)
    return HTTPService.get(apiEndpoints.catalogs);
}

export interface ICatalogListAPIResponse {
    message: string;
    status: number;
    data: Catalog[]
}