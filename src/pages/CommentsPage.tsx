import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from '../components/Comments/Comment';

interface CommentType {
    id: number;
    name: string;
    body: string;
    email: string;
}

const CommentsPage: React.FC = () => {
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setComments(response.data);
            });
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            <div>
                {comments.map(comment => <Comment key={comment.id} {...comment} />)}
            </div>
        </div>
    );
};

export default CommentsPage;
