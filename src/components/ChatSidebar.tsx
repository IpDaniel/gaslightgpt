
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Settings, ExternalLink, ChevronDown, ChevronUp, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConversationProps {
  id: string;
  title: string;
  date: string;
  selected?: boolean;
  onClick: () => void;
}

const Conversation: React.FC<ConversationProps> = ({ title, date, selected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "flex items-center p-3 text-sm rounded-md cursor-pointer group",
        selected 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      )}
    >
      <MessageSquare size={16} className="flex-shrink-0 mr-2" />
      <div className="flex-1 overflow-hidden">
        <p className="truncate">{title}</p>
        <p className="text-xs opacity-60 truncate">{date}</p>
      </div>
    </div>
  );
};

interface ChatSidebarProps {
  onNewChat: () => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ onNewChat }) => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [historyExpanded, setHistoryExpanded] = useState(true);
  
  const conversations = [
    { id: "1", title: "Advanced React components", date: "April 12, 2025" },
    { id: "2", title: "Tailwind CSS optimization", date: "April 11, 2025" },
    { id: "3", title: "TypeScript generics explained", date: "April 10, 2025" },
  ];

  return (
    <div className="flex flex-col h-full w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-3">
        <Button 
          onClick={onNewChat} 
          className="w-full bg-sidebar-primary hover:bg-sidebar-primary/90 text-sidebar-primary-foreground flex items-center gap-2" 
          variant="default"
        >
          <Plus size={16} />
          New chat
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto px-3">
        <div className="mb-2">
          <div 
            className="flex items-center text-sm mb-1 cursor-pointer" 
            onClick={() => setHistoryExpanded(!historyExpanded)}
          >
            {historyExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            <span className="ml-1">Recent conversations</span>
          </div>
          
          {historyExpanded && (
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <Conversation
                  key={conversation.id}
                  id={conversation.id}
                  title={conversation.title}
                  date={conversation.date}
                  selected={selectedConversation === conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-3 border-t border-sidebar-border">
        <div className="flex items-center p-3 text-sm rounded-md cursor-pointer hover:bg-sidebar-accent/50">
          <Settings size={16} className="mr-2" />
          <span>Settings</span>
        </div>
        
        <div className="flex items-center p-3 text-sm rounded-md cursor-pointer hover:bg-sidebar-accent/50">
          <ExternalLink size={16} className="mr-2" />
          <span>Updates & FAQ</span>
        </div>
        
        <div className="flex items-center p-3 text-sm rounded-md cursor-pointer hover:bg-sidebar-accent/50">
          <LogOut size={16} className="mr-2" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
