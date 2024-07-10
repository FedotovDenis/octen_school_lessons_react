import React, { Component } from 'react';
import axios from 'axios';
import Users from './components/Users/Users';
import './style.module.css';

interface PostType {
    id: number;
    title: string;
    body: string;
}

interface AppState {
    selectedUserId: number | null;
    posts: PostType[];
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedUserId: null,
            posts: []
        };
    }

    handleUserSelect = (userId: number) => {
        this.setState({ selectedUserId: userId, posts: [] }, this.fetchPosts);
    };

    fetchPosts = () => {
        if (this.state.selectedUserId !== null) {
            axios.get(`https://dummyjson.com/posts/user/${this.state.selectedUserId}`)
                .then(response => {
                    this.setState({ posts: response.data.posts });
                })
                .catch(error => {
                    console.error('Error fetching the posts:', error);
                });
        }
    };

    render() {
        return (
            <div className="App">
                <h1>Users</h1>
                <div className="Content">
                    <Users onUserSelect={this.handleUserSelect} />
                    <div className="PostsContainer">
                        {this.state.selectedUserId !== null && (
                            <div className="Posts">
                                <h2>Posts by User {this.state.selectedUserId}</h2>
                                {this.state.posts.map(post => (
                                    <div key={post.id} className="Post">
                                        <h3>{post.title}</h3>
                                        <p>{post.body}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
