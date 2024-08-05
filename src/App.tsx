import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import CommentsPage from './pages/CommentsPage';
import UserPostsPage from './pages/UserPostsPage';
import PostCommentsPage from './pages/PostCommentsPage';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/comments">Comments</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/comments" element={<CommentsPage />} />
                    <Route path="/users/:userId/posts" element={<UserPostsPage />} />
                    <Route path="/posts/:postId/comments" element={<PostCommentsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
