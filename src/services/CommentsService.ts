import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getComments = async () => {
    const response = await axios.get(`${API_URL}/comments`);
    return response.data;
};
