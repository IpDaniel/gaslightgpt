import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatArea from './ChatArea';

const ChatLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const handleNewChat = () => {
    // Reset the chat state or navigate to a new chat
    console.log("New chat requested");
    // You might want to add logic here to clear the messages in ChatArea
    // or trigger a state change in a parent component
  };

  return (
    <div className="flex h-screen bg-background">
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} sm:block`}>
        <ChatSidebar onNewChat={handleNewChat} />
      </div>
      
      <div className="flex-1 flex flex-col h-full">
        <ChatArea onToggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default ChatLayout; 