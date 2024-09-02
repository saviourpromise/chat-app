import React from 'react';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = ({ user }) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow 
                projectId="6712bf97-1d81-4ea4-8e2e-1f4ac8a97ff9"
                username={user.username}
                secret={user.secret}
                style={{ height: '100%' }}
            />
        </div>
    );
};

export default ChatsPage;
