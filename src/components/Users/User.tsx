import React from 'react';

interface UserProps {
    id: number;
    name: string;
    email: string;
    onClick: (userId: number) => void;
}

const User: React.FC<UserProps> = ({ id, name, email, onClick }) => {
    return (
        <div onClick={() => onClick(id)}>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default User;
