import React, { Component } from 'react';

interface UserProps {
    id: number;
    name: string;
    email: string;
    onClick: (id: number) => void;
}

class User extends Component<UserProps> {
    handleClick = () => {
        this.props.onClick(this.props.id);
    };

    render() {
        return (
            <div className="User">
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
                <button onClick={this.handleClick}>Show Posts</button>
            </div>
        );
    }
}

export default User;
