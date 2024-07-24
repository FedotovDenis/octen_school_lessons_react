import React, { useEffect, useState } from 'react';
import { getUsers } from '../../services/api';
import User from './User';

interface UserType {
    id: number;
    name: string;
    email: string;
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    return (
        <div className="Users">
            {users.map(user => (
                <User key={user.id} {...user} />
            ))}
        </div>
    );
};

export default Users;
