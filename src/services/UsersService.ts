export interface UserType {
    id: number;
    name: string;
}

export const getUsers = async (): Promise<UserType[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
};
