import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessage, { MessageRole } from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import WelcomeScreen from './WelcomeScreen';

interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp?: string;
}

interface ChatAreaProps {
  onToggleSidebar: () => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({ onToggleSidebar }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);
    
    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `This is a simulated response to: "${content}"\n\nIn a real implementation, this would be replaced with an actual API call to your AI service.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsProcessing(false);
    }, 2000);
  };

  const handleExampleClick = (text: string) => {
    handleSendMessage(text);
  };

  const isWelcomeScreen = messages.length === 0;

  return (
    <div className="flex flex-col h-full">
      <ChatHeader onToggleSidebar={onToggleSidebar} isWelcomeScreen={isWelcomeScreen} />
      
      <div className="flex-1 overflow-y-auto">
        {isWelcomeScreen ? (
          <WelcomeScreen onExampleClick={handleExampleClick} />
        ) : (
          <div className="flex justify-center w-full">
            <div className="w-full max-w-2xl px-4 py-4">
              <div className="space-y-4 w-full">
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    role={message.role}
                    content={message.content}
                    timestamp={message.timestamp}
                  />
                ))}
                {isProcessing && <TypingIndicator />}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {!isWelcomeScreen && (
        <ChatInput 
          onSendMessage={handleSendMessage} 
          isProcessing={isProcessing} 
        />
      )}
    </div>
  );
};

export default ChatArea; 