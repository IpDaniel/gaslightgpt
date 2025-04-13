import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Info } from "lucide-react";

interface ChatHeaderProps {
  onToggleSidebar: () => void;
  isWelcomeScreen?: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onToggleSidebar, isWelcomeScreen = true }) => {
  return (
    <header className="flex items-center justify-between p-3 h-14 border-b border-gray-100">
      <div className="flex items-center ml-2">
        <h1 className="text-lg font-semibold text-gray-600 mr-1.5">ChatGPT</h1>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
      
      <div className="flex items-center text-sm text-gray-500">
        <span>Saved memory full</span>
        <Info className="h-4 w-4 ml-1.5" />
      </div>
      
      <div className="mr-4">
        {isWelcomeScreen && (
          <Button variant="outline" size="sm" className="rounded-full border-gray-300 text-gray-700 flex items-center px-3 py-1">
            <svg 
              className="w-4 h-4 mr-1.5 text-gray-500" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeDasharray="4 4"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Temporary
          </Button>
        )}
      </div>
    </header>
  );
};

export default ChatHeader;
