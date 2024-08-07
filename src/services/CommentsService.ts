export interface CommentType {
    id: number;
    postId: number;
    name: string;
    body: string;
}

export const getComments = async (): Promise<CommentType[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    return response.json();
};

export const getPostComments = async (postId: number): Promise<CommentType[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return response.json();
};
