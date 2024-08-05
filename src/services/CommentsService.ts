import axios from 'axios';

export interface CommentType {
    id: number;
    name: string;
    email: string;
    body: string;
    postId: number;
}

export const getComments = async (): Promise<CommentType[]> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return response.data;
};
