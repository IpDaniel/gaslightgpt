
import React, { useState, useRef, useEffect } from 'react';
import ChatSidebar from '@/components/ChatSidebar';
import ChatMessage, { ChatMessageProps } from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import ChatHeader from '@/components/ChatHeader';
import TypingIndicator from '@/components/TypingIndicator';
import WelcomeScreen from '@/components/WelcomeScreen';

const Index = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    // Add user message
    const userMessage: ChatMessageProps = {
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      setIsTyping(false);
      
      const aiMessage: ChatMessageProps = {
        role: 'assistant',
        content: getAIResponse(text),
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 2000);
  };
  
  const handleNewChat = () => {
    setMessages([]);
  };
  
  const handleExampleClick = (text: string) => {
    handleSendMessage(text);
  };
  
  // Simple AI response logic (just for UI demo)
  const getAIResponse = (message: string): string => {
    const responses = [
      "I understand your question about \"" + message + "\". Let me help with that.",
      "Thanks for asking about \"" + message + "\". Here's what I can tell you...",
      "That's an interesting point about \"" + message + "\". Let me share some thoughts.",
      "I've analyzed your question about \"" + message + "\" and here's my response.",
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return randomResponse + "\n\nThis is a simulated response in our ChatGPT UI clone. In a real application, this would connect to an actual AI model to generate meaningful responses based on your input.";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 transform fixed inset-y-0 left-0 z-20 sm:relative transition-transform duration-300 ease-in-out`}>
        <ChatSidebar onNewChat={handleNewChat} />
      </div>
      
      {/* Overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 sm:hidden z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Main content */}
      <div className="flex flex-col flex-1 relative overflow-hidden">
        <ChatHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <WelcomeScreen onExampleClick={handleExampleClick} />
          ) : (
            <div>
              {messages.map((message, index) => (
                <ChatMessage 
                  key={index} 
                  role={message.role} 
                  content={message.content} 
                  timestamp={message.timestamp} 
                />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        {/* Input box */}
        <ChatInput onSendMessage={handleSendMessage} isProcessing={isTyping} />
      </div>
    </div>
  );
};

export default Index;
