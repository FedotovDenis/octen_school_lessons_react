import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

export const getPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

export const getComments = async () => {
    const response = await axios.get(`${API_URL}/comments`);
    return response.data;
};
