import React from 'react';
import { Link } from 'react-router-dom';

interface PostProps {
    post: {
        id: number;
        title: string;
        body: string;
    };
}

const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}/comments`}>View Comments</Link>
        </div>
    );
};

export default Post;
