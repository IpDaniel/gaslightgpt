import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Globe, Lightbulb, Mic, ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isProcessing }) => {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize the textarea as content changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && inputValue.trim()) {
      e.preventDefault(); // Prevent default to avoid new line
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleSendClick = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="p-3 border-t border-gray-100">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-3.5">
        <div className="p-2 mb-2.5 flex items-center">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 resize-none overflow-hidden"
            placeholder="Message ChatGPT..."
            rows={1}
            style={{ minHeight: '24px', maxHeight: '120px' }}
            disabled={isProcessing}
            autoFocus
          />
        </div>
        
        <div className="flex items-center justify-between mt-2.5">
          <div className="flex items-center space-x-2.5">
            <Button variant="outline" className="rounded-full p-1.5 h-9 w-9">
              <Plus className="h-4.5 w-4.5" />
            </Button>
            
            <Button variant="outline" className="rounded-full px-2.5 py-1 flex items-center text-sm h-8">
              <Globe className="h-3.5 w-3.5 mr-1.5" />
              Search
            </Button>
            
            <Button variant="outline" className="rounded-full px-2.5 py-1 flex items-center text-sm h-8">
              <Lightbulb className="h-3.5 w-3.5 mr-1.5" />
              Reason
            </Button>
          </div>
          
          <div className="flex items-center space-x-2.5">
            <Button variant="outline" className="rounded-full p-1.5 h-9 w-9 bg-white">
              <Mic className="h-4.5 w-4.5" />
            </Button>
            
            <Button 
              className="rounded-full p-1.5 h-9 w-9 bg-black text-white"
              onClick={handleSendClick}
              disabled={isProcessing}
            >
              {inputValue.trim() ? (
                <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
              ) : (
                <div className="flex items-center h-4.5 space-x-0.5">
                  <div className="bg-white w-1 h-1.5 rounded-sm"></div>
                  <div className="bg-white w-1 h-4 rounded-sm"></div>
                  <div className="bg-white w-1 h-2.5 rounded-sm"></div>
                  <div className="bg-white w-1 h-1.5 rounded-sm"></div>
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400 text-center mt-2">
        ChatGPT can make mistakes. Check important info.
      </div>
    </div>
  );
};

export default ChatInput;
