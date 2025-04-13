import React from 'react';

export type MessageRole = 'user' | 'assistant' | 'system';

interface ChatMessageProps {
  role: MessageRole;
  content: string;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  if (role === 'user') {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-[66%]">
          <div className="bg-gray-100 rounded-2xl px-4 py-2 text-gray-800">
            {content}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="max-w-full">
        <div className="text-gray-800 px-1 py-1">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
