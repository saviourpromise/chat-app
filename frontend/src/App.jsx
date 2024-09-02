import React, { useState } from 'react';
import AuthPage from './AuthPage';
import ChatsPage from './ChatsPage';
import './App.css'

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <div>
            {user ? (
                <ChatsPage user={user} />
            ) : (
                <AuthPage onAuth={(user) => setUser(user)} />
            )}
        </div>
    );
};

export default App;
