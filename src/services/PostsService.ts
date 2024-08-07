export interface PostType {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export const getPosts = async (): Promise<PostType[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
};

export const getUserPosts = async (userId: number): Promise<PostType[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.json();
};
