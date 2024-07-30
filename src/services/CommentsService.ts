import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export interface CommentType {
    id: number;
    name: string;
    body: string;
    email: string;
}

export const getComments = async (): Promise<CommentType[]> => {
    const response = await axios.get<CommentType[]>(`${API_URL}/comments`);
    return response.data;
};
