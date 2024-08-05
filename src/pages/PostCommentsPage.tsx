import React, { useEffect, useState } from 'react';
import { getComments } from '../services/CommentsService';
import Comment from '../components/Comments/Comment';
import { useParams } from 'react-router-dom';

const PostCommentsPage: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const [comments, setComments] = useState<CommentType[]>([]);

    useEffect(() => {
        const fetchPostComments = async () => {
            const commentsData = await getComments();
            setComments(commentsData.filter(comment => comment.postId === parseInt(postId!)));
        };

        fetchPostComments();
    }, [postId]);

    return (
        <div className="PostComments">
            {comments.map(comment => (
                <Comment key={comment.id} {...comment} />
            ))}
        </div>
    );
};

export default PostCommentsPage;
