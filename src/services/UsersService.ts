import axios from 'axios';

export interface UserType {
    id: number;
    name: string;
    email: string;
}

export const getUsers = async (): Promise<UserType[]> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
};
