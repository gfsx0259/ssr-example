import axios, { AxiosInstance } from "axios";
import useUsers from "./useUsers.ts";

export default function () {
    const apiClient: AxiosInstance =  axios.create({
        baseURL: 'https://dummyjson.com/',
    });

    return {
        ...useUsers(apiClient),
    };
}
