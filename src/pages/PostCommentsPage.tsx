import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostComments, CommentType } from '../services/CommentsService';
import Comment from '../components/Comments/Comment';

const PostCommentsPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        const fetchPostComments = async () => {
            if (postId) {
                const commentsData = await getPostComments(parseInt(postId));
                setComments(commentsData);
            }
        };

        fetchPostComments();
    }, [postId]);

    return (
        <div>
            <h1>Post Comments</h1>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default PostCommentsPage;
