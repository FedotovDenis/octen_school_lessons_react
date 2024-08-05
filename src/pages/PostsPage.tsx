import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/PostsService';
import Post from '../components/Posts/Post';
import { useNavigate } from 'react-router-dom';

export interface PostType {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await getPosts();
            setPosts(postsData);
        };

        fetchPosts();
    }, []);

    const handlePostClick = (postId: number) => {
        navigate(`/posts/${postId}/comments`);
    };

    return (
        <div className="Posts">
            {posts.map(post => (
                <Post key={post.id} {...post} onClick={handlePostClick} />
            ))}
        </div>
    );
};

export default PostsPage;
