
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export type MessageRole = 'user' | 'assistant' | 'system';

export interface ChatMessageProps {
  role: MessageRole;
  content: string;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, timestamp }) => {
  return (
    <div className={cn(
      "py-6 px-4 md:px-8 lg:px-16 flex",
      role === 'user' ? 'bg-chat-user-bg' : 'bg-chat-assistant-bg'
    )}>
      <div className="flex w-full max-w-4xl mx-auto">
        <div className="mr-4 flex-shrink-0 pt-1">
          <Avatar className={cn(
            "h-8 w-8 rounded-sm",
            role === 'user' 
              ? 'bg-chat-user-icon text-white' 
              : 'bg-chat-bot-icon text-white'
          )}>
            <span className="text-xs font-bold">
              {role === 'user' ? 'U' : 'AI'}
            </span>
          </Avatar>
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="font-semibold text-sm">
            {role === 'user' ? 'You' : 'ChatGPT'}
            {timestamp && <span className="text-xs font-normal opacity-50 ml-2">{timestamp}</span>}
          </div>
          <div className="text-sm whitespace-pre-wrap prose prose-slate max-w-none">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
