import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});


export default class HTTPService {
    static get<T = never, R = AxiosResponse<T>>(url: string, params?: any): Promise<R> {
        return new Promise((resolve, reject) => {
            axiosInstance
                .get(url, params)
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response || error));
        });
    }
}
