import React from 'react';

interface PostProps {
    id: number;
    title: string;
    body: string;
}

const Post: React.FC<PostProps> = ({ id, title, body }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;
