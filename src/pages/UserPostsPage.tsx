import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserPosts, PostType } from '../services/PostsService';
import Post from '../components/Posts/Post';

const UserPostsPage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        const fetchUserPosts = async () => {
            if (userId) {
                const postsData = await getUserPosts(parseInt(userId));
                setPosts(postsData);
            }
        };

        fetchUserPosts();
    }, [userId]);

    return (
        <div>
            <h1>User Posts</h1>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default UserPostsPage;
