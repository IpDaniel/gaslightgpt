import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-3 h-3 bg-black rounded-full animate-pulse"></div>
    </div>
  );
};

export default TypingIndicator;
