import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export interface PostType {
    id: number;
    title: string;
    body: string;
}

export const getPosts = async (): Promise<PostType[]> => {
    const response = await axios.get<PostType[]>(`${API_URL}/posts`);
    return response.data;
};
