import React from 'react';

interface UserProps {
    id: number;
    name: string;
    email: string;
}

const User: React.FC<UserProps> = ({ id, name, email }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default User;
