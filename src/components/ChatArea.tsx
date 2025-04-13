import React, { useState, useRef, useEffect } from 'react';
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
  const [streamingContent, setStreamingContent] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingContent]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);
    setStreamingContent('');
    
    try {
      // Prepare messages for API in the format OpenAI expects
      const apiMessages = messages.concat(userMessage).map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      
      console.log("Sending messages to API:", apiMessages);
      
      // Call backend API with streaming
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      console.log("Response received, starting to process stream");
      
      // Process the streaming response
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Failed to get response reader');
      }

      let accumulatedContent = '';
      
      // Read the stream
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log("Stream complete");
          break;
        }
        
        // Decode and append the chunk
        const chunk = new TextDecoder().decode(value);
        console.log("Received chunk:", chunk);
        
        accumulatedContent += chunk;
        setStreamingContent(accumulatedContent);
      }
      
      console.log("Final content:", accumulatedContent);
      
      // When stream is complete, add the full response as a message
      if (accumulatedContent) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: accumulatedContent,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error("No content received from API");
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Sorry, there was an error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setStreamingContent('');
      setIsProcessing(false);
    }
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
                
                {/* Show streaming content while it's coming in */}
                {streamingContent && (
                  <div className="mb-4">
                    <div className="max-w-full">
                      <div className="text-gray-800 px-1 py-1">
                        {streamingContent}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Show typing indicator when processing but no streaming content yet */}
                {isProcessing && !streamingContent && <TypingIndicator />}
                
                <div ref={messagesEndRef} />
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