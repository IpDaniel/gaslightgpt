import React from 'react';
// Import the layout you want to use
import ChatLayout from '@/components/ChatLayout';
// Or use the original layout
// import ChatLayout from '@/components/OriginalChatLayout';

const Index = () => {
  console.log("Rendering Index component");
  return <ChatLayout />;
};

export default Index;
