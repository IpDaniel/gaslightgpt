import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Settings, ExternalLink, ChevronDown, ChevronUp, LogOut, X, Search, PenSquare, FileText, Grid } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ConversationProps {
  id: string;
  title: string;
  selected?: boolean;
  onClick: () => void;
}

const Conversation: React.FC<ConversationProps> = ({ title, selected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "flex items-center py-2 px-2 text-sm rounded-md cursor-pointer group",
        selected 
          ? "bg-gray-200 text-gray-800" 
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      <div className="flex-1 overflow-hidden">
        <p className="truncate">{title}</p>
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
  
  const todayConversations = [
    { id: "1", title: "Advanced React components" },
  ];
  
  const yesterdayConversations = [
    { id: "2", title: "Tailwind CSS optimization" },
  ];
  
  const previousWeekConversations = [
    { id: "3", title: "TypeScript generics explained" },
    { id: "4", title: "Next.js routing strategies" },
  ];
  
  const previousMonthConversations = [
    { id: "5", title: "CSS Grid layouts" },
    { id: "6", title: "React performance tips" },
  ];

  return (
    <div className="flex flex-col h-full w-64 bg-gray-50 text-gray-700 border-r border-gray-200">
      <div className="p-3 flex justify-between items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                size="icon"
                variant="ghost" 
                className="h-8 w-8 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <X size={18} strokeWidth={2.5} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-900 text-white border-0 text-xs py-1 px-2">
              Close sidebar
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="icon"
                  variant="ghost" 
                  className="h-8 w-8 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                >
                  <Search size={18} strokeWidth={2.5} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-900 text-white border-0 text-xs py-1 px-2">
                Search chats
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={onNewChat} 
                  size="icon"
                  variant="ghost" 
                  className="h-8 w-8 text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                >
                  <PenSquare size={18} strokeWidth={2.5} />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-900 text-white border-0 text-xs py-1 px-2">
                New chat
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      {/* Model Selection Cards */}
      <div className="px-2">
        <div className="flex items-center py-2.5 px-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 text-gray-700">
          <div className="w-5 h-5 mr-3 flex-shrink-0">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="currentColor"></path>
            </svg>
          </div>
          <span>ChatGPT</span>
        </div>
        
        <div className="flex items-center py-2.5 px-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 text-gray-700">
          <FileText size={18} strokeWidth={2.5} className="mr-3 flex-shrink-0" />
          <span>Text naturalizer</span>
        </div>
        
        <div className="flex items-center py-2.5 px-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 text-gray-700">
          <Grid size={18} strokeWidth={2.5} className="mr-3 flex-shrink-0" />
          <span>Explore GPTs</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-2 mt-6">
        {historyExpanded && (
          <div className="space-y-3">
            {/* Today Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-900 mb-1 px-2">Today</h3>
              <div className="space-y-1">
                {todayConversations.map((conversation) => (
                  <Conversation
                    key={conversation.id}
                    id={conversation.id}
                    title={conversation.title}
                    selected={selectedConversation === conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                  />
                ))}
              </div>
            </div>
            
            {/* Yesterday Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-900 mb-1 px-2">Yesterday</h3>
              <div className="space-y-1">
                {yesterdayConversations.map((conversation) => (
                  <Conversation
                    key={conversation.id}
                    id={conversation.id}
                    title={conversation.title}
                    selected={selectedConversation === conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                  />
                ))}
              </div>
            </div>
            
            {/* Previous 7 Days Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-900 mb-1 px-2">Previous 7 days</h3>
              <div className="space-y-1">
                {previousWeekConversations.map((conversation) => (
                  <Conversation
                    key={conversation.id}
                    id={conversation.id}
                    title={conversation.title}
                    selected={selectedConversation === conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                  />
                ))}
              </div>
            </div>
            
            {/* Previous 30 Days Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-900 mb-1 px-2">Previous 30 days</h3>
              <div className="space-y-1">
                {previousMonthConversations.map((conversation) => (
                  <Conversation
                    key={conversation.id}
                    id={conversation.id}
                    title={conversation.title}
                    selected={selectedConversation === conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-3 border-t border-gray-200">
        <div className="flex items-center p-3 rounded-md cursor-pointer hover:bg-gray-100 text-gray-800">
          <div className="w-5 h-5 mr-3 flex-shrink-0 flex items-center justify-center">
            <div className="w-3.5 h-3.5 border-2 border-gray-800 rounded-md transform rotate-45"></div>
          </div>
          <div>
            <p className="text-sm font-bold">Upgrade plan</p>
            <p className="text-xs text-gray-400">More access to the best models</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
