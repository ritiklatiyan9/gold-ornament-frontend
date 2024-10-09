import React from 'react';
import { Message } from '../store/chatSlice';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAI = message.role === 'ai';
  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-2`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isAI ? 'bg-gray-200 text-gray-800' : 'bg-blue-200 text-black shadow-2xl'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;