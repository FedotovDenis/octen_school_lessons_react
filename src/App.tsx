import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import CommentsPage from './pages/CommentsPage';
import './styles.module.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><Link to="/comments">Comments</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/comments" element={<CommentsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
