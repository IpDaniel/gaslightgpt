
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface ChatHeaderProps {
  onToggleSidebar: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onToggleSidebar }) => {
  return (
    <div className="flex items-center h-12 border-b sm:hidden px-4">
      <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex-1 text-center font-medium truncate">ChatGPT</div>
    </div>
  );
};

export default ChatHeader;
