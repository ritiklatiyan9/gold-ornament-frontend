import axios from 'axios';

const API_URL = 'http://localhost:8000'; 

export const sendMessage = async (content: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/api/messages/ask`, { message: content });
    // Access the aiMessage content from the response
    return response.data.aiMessage.content; 
  } catch (error) {
    console.error('Error sending message:', error);
    return 'Sorry, I encountered an error. Please try again.';
  }
};
