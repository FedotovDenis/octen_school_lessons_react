import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data.users;
};

export const getPostsByUserId = async (userId: number) => {
    const response = await axios.get(`${API_URL}/posts/user/${userId}`);
    return response.data.posts;
};
