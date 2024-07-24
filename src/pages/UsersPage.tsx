import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../components/Users/User';

interface UserType {
    id: number;
    name: string;
    email: string;
}

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            });
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
