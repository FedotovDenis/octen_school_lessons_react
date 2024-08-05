import React from 'react';

interface PostProps {
    id: number;
    title: string;
    body: string;
    onClick: (postId: number) => void;
}

const Post: React.FC<PostProps> = ({ id, title, body, onClick }) => {
    return (
        <div onClick={() => onClick(id)}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;
