
import React from 'react';
import { Avatar } from "@/components/ui/avatar";

const TypingIndicator: React.FC = () => {
  return (
    <div className="py-6 px-4 md:px-8 lg:px-16 flex bg-chat-assistant-bg">
      <div className="flex w-full max-w-4xl mx-auto">
        <div className="mr-4 flex-shrink-0 pt-1">
          <Avatar className="h-8 w-8 rounded-sm bg-chat-bot-icon text-white">
            <span className="text-xs font-bold">AI</span>
          </Avatar>
        </div>
        
        <div className="flex-1">
          <div className="font-semibold text-sm">ChatGPT</div>
          <div className="typing-indicator mt-2">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
