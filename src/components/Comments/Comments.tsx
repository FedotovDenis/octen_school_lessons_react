import React, { useEffect, useState } from 'react';
import { getComments } from '../../services/api';
import Comment from './Comment';

interface CommentType {
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comments: React.FC = () => {
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            const commentsData = await getComments();
            setComments(commentsData);
        };

        fetchComments();
    }, []);

    return (
        <div className="Comments">
            {comments.map(comment => (
                <Comment key={comment.id} {...comment} />
            ))}
        </div>
    );
};

export default Comments;
