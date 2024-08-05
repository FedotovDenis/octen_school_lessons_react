import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/PostsService';
import Post from '../components/Posts/Post';
import { useParams, useNavigate } from 'react-router-dom';

const UserPostsPage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [posts, setPosts] = useState<PostType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserPosts = async () => {
            const postsData = await getPosts();
            setPosts(postsData.filter(post => post.userId === parseInt(userId!)));
        };

        fetchUserPosts();
    }, [userId]);

    const handlePostClick = (postId: number) => {
        navigate(`/posts/${postId}/comments`);
    };

    return (
        <div className="UserPosts">
            {posts.map(post => (
                <Post key={post.id} {...post} onClick={handlePostClick} />
            ))}
        </div>
    );
};

export default UserPostsPage;
