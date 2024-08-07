import React from 'react';
import { Link } from 'react-router-dom';

interface UserProps {
    user: {
        id: number;
        name: string;
    };
}

const User: React.FC<UserProps> = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <Link to={`/users/${user.id}/posts`}>View Posts</Link>
        </div>
    );
};

export default User;
