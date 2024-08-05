import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/UsersService';
import User from '../components/Users/User';
import { useNavigate } from 'react-router-dom';

export interface UserType {
    id: number;
    name: string;
    email: string;
}

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    const handleUserClick = (userId: number) => {
        navigate(`/users/${userId}/posts`);
    };

    return (
        <div className="Users">
            {users.map(user => (
                <User key={user.id} {...user} onClick={handleUserClick} />
            ))}
        </div>
    );
};

export default UsersPage;
