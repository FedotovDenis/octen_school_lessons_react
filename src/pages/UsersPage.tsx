import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/UsersService';
import User from '../components/Users/User';

interface UserType {
    id: number;
    name: string;
    email: string;
}

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <div>
                {users.map(user => <User key={user.id} {...user} />)}
            </div>
        </div>
    );
};

export default UsersPage;
