import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border bg-gray-50 border-2 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 flex items-center justify-center"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;