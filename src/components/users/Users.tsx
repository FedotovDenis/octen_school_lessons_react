import React, { FC, useEffect, useState } from 'react';
import { getUsers } from '../../services/userService';
import User from '../user/User';

interface UserType {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface UsersProps {
    onUserSelect: (id: number) => void;
}

const Users: FC<UsersProps> = ({ onUserSelect }) => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };

        fetchUsers();
    }, []);

    return (
        <div className="Users">
            {users.map(user => (
                <User
                    key={user.id}
                    id={user.id}
                    name={`${user.firstName} ${user.lastName}`}
                    email={user.email}
                    onClick={onUserSelect}
                />
            ))}
        </div>
    );
};

export default Users;
