import { useState } from "react";

export const useChat = () => {

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  return {
    messages,
    setMessages,
    loading,
    setLoading,
  };
};