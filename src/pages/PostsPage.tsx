import React, { useEffect, useState } from 'react';
import { getPosts, PostType } from '../services/PostsService';
import Post from '../components/Posts/Post';

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postsData = await getPosts();
            setPosts(postsData);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {posts.map(post => <Post key={post.id} {...post} />)}
            </div>
        </div>
    );
};

export default PostsPage;
