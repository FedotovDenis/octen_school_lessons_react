import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import IUserType from "../../modules/IUserType";


interface UsersProps {
    onUserSelect: (id: number) => void;
}

interface UsersState {
    users: IUserType[];
}
class Users extends Component<UsersProps, UsersState> {
    constructor(props: UsersProps) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        axios.get('https://dummyjson.com/users')
            .then(response => {
                this.setState({ users: response.data.users });
            })
            .catch(error => {
                console.error('Error fetching the users:', error);
            });
    };

    render() {
        return (
            <div className="Users">
                {this.state.users.map(user => (
                    <User
                        key={user.id}
                        id={user.id}
                        name={`${user.firstName} ${user.lastName}`}
                        email={user.email}
                        onClick={this.props.onUserSelect}
                    />
                ))}
            </div>
        );
    }
}

export default Users;
