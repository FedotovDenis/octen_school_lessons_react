import React from 'react';

interface CommentProps {
    comment: {
        id: number;
        name: string;
        body: string;
    };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
    return (
        <div>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;
