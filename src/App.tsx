/*
https://dummyjson.com/docs/users
отримати та вивести інфу по всіх юзерах. Для запитів використовуємо axios та розносимо логіку в сервіси
Структура компонентів : App - Users- User
в компоненті User зробити кнопку при натсиканні на яку відбувається стейт ліфтінг ід користувача в батьківську компоненту.
В батьківській компоненті вивести всі пости обраного юзера (https://dummyjson.com/docs/posts  Get all posts by user id)
*/

import React, { FC, useState, useEffect } from 'react';
import Users from './components/users/Users';
import { getPostsByUserId } from './services/userService';
import './App.css'

interface PostType {
    id: number;
    title: string;
    body: string;
}

const App: FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        if (selectedUserId !== null) {
            const fetchPosts = async () => {
                console.log(`Fetching posts for user ${selectedUserId}`);
                const posts = await getPostsByUserId(selectedUserId);
                setPosts(posts);
                console.log(posts);  // Для отладки
            };

            fetchPosts();
        }
    }, [selectedUserId]);

    return (
        <div className="App">
            <h1>Users</h1>
            <Users onUserSelect={setSelectedUserId} />
            {selectedUserId !== null && (
                <div className="Posts">
                    <h2>Posts by User {selectedUserId}</h2>
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <div key={post.id} className="Post">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        ))
                    ) : (
                        <p>No posts found for this user.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
