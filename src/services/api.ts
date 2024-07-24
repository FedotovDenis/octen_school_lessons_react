import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const postData = async (data: { userId: number; title: string; body: string }) => {
    return await axios.post(`${BASE_URL}/posts`, data);
};
