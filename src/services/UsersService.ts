import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export interface UserType {
    id: number;
    name: string;
    email: string;
}

export const getUsers = async (): Promise<UserType[]> => {
    const response = await axios.get<UserType[]>(`${API_URL}/users`);
    return response.data;
};
