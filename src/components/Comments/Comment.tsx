import React from 'react';

interface CommentProps {
    id: number;
    name: string;
    body: string;
    email: string;
}

const Comment: React.FC<CommentProps> = ({ name, body, email }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{body}</p>
            <p>{email}</p>
        </div>
    );
};

export default Comment;
