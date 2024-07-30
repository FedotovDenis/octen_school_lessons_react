import React, { useEffect, useState } from 'react';
import { getUsers, UserType } from '../services/UsersService';
import User from '../components/Users/User';

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
