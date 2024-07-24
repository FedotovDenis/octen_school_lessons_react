import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Posts/Post';

interface PostType {
    id: number;
    title: string;
    body: string;
}

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            });
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
