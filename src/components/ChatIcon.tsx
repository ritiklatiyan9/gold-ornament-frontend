import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ChatIconProps {
  onClick: () => void;
}

const ChatIcon: React.FC<ChatIconProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default ChatIcon;