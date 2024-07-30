import React, { useEffect, useState } from 'react';
import { getComments, CommentType } from '../services/CommentsService';
import Comment from '../components/Comments/Comment';

const CommentsPage: React.FC = () => {
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            const commentsData = await getComments();
            setComments(commentsData);
        };

        fetchComments();
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
