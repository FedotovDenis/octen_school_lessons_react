import React from 'react';

const Post: React.FC<{ id: number, title: string, body: string }> = ({ id, title, body }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;
