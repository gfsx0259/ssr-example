import { AxiosResponse, AxiosInstance } from "axios";

export interface UserResponse {
  users: User[],
  total: number
  limit: number
}

export interface User {
  id: number,
  firstName: string
}

export default function (client: AxiosInstance) {
    async function getUsers(): Promise<AxiosResponse<UserResponse>> {
        return client.get<UserResponse>(
            'users'
        );
    }

    return {
        getUsers
    };
}