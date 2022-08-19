import { apiEndpoints } from "../ApiEndpoints";
import HTTPService from "../HttpService";
import { Catalog } from "../models/Catalog.model";

export const getCatalogDetail = (catalogId: string): Promise<ICatalogDetailAPIResponse> => {
    return HTTPService.get(`${apiEndpoints.catalogs}/${catalogId}`);
}

export interface ICatalogDetailAPIResponse {
    message: string;
    status: number;
    data: Catalog
}