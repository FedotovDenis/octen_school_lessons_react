import React, { FC } from 'react';

interface UserProps {
    id: number;
    name: string;
    email: string;
    onClick: (id: number) => void;
}

const User: FC<UserProps> = ({ id, name, email, onClick }) => {
    return (
        <div className="User">
            <h2>{name}</h2>
            <p>{email}</p>
            <button onClick={() => onClick(id)}>Show Posts</button>
        </div>
    );
};

export default User;
