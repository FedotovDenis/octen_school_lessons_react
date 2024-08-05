import axios from 'axios';

export interface PostType {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const getPosts = async (): Promise<PostType[]> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};
