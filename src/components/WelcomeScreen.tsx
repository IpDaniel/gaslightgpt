
import React from 'react';
import { Button } from "@/components/ui/button";
import { Lightbulb, MessageCircle, Wand2 } from "lucide-react";

interface ExamplePrompt {
  text: string;
  onClick: () => void;
}

interface WelcomeScreenProps {
  onExampleClick: (text: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onExampleClick }) => {
  const examples: ExamplePrompt[] = [
    { text: "Explain quantum computing in simple terms", onClick: () => onExampleClick("Explain quantum computing in simple terms") },
    { text: "Got any creative ideas for a 10 year old's birthday?", onClick: () => onExampleClick("Got any creative ideas for a 10 year old's birthday?") },
    { text: "How do I make an HTTP request in Javascript?", onClick: () => onExampleClick("How do I make an HTTP request in Javascript?") },
    { text: "Write a poem about a programmer", onClick: () => onExampleClick("Write a poem about a programmer") },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 text-center">
      <h1 className="text-3xl font-bold mb-8">ChatGPT</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-2">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h3 className="font-medium">Examples</h3>
          <p className="text-sm text-muted-foreground">Questions about various topics</p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-2">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h3 className="font-medium">Natural conversation</h3>
          <p className="text-sm text-muted-foreground">Responds to follow-ups</p>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-2">
            <Wand2 className="h-6 w-6" />
          </div>
          <h3 className="font-medium">Creative assistance</h3>
          <p className="text-sm text-muted-foreground">Helps with creative tasks</p>
        </div>
      </div>
      
      <div className="space-y-2 w-full max-w-md">
        {examples.map((example, index) => (
          <Button 
            key={index} 
            variant="outline" 
            className="w-full justify-start h-auto p-4 text-left whitespace-normal"
            onClick={example.onClick}
          >
            {example.text}
          </Button>
        ))}
      </div>
      
      <div className="mt-12 text-sm text-muted-foreground">
        ChatGPT can make mistakes. Consider checking important information.
      </div>
    </div>
  );
};

export default WelcomeScreen;
