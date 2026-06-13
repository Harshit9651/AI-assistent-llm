import { useState } from "react";

import Navbar from "../components/common/Navbar";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

import { useChat } from "../hooks/useChat";
import { askQuestion } from "../services/chatService";

const ChatPage = () => {

  const {
    messages,
    setMessages,
  } = useChat();

  const [loading, setLoading] =
    useState(false);

  const handleSend = async (text) => {

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {

      const aiResponse =
        await askQuestion(text);

      setMessages((prev) => [
        ...prev,
        aiResponse,
      ]);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <Navbar />

      <div
        className="
        max-w-6xl
        mx-auto
        h-[90vh]
        flex
        flex-col
        "
      >

        <ChatWindow
          messages={messages}
          loading={loading}
        />

        <ChatInput
          onSend={handleSend}
        />

      </div>
    </>
  );
};

export default ChatPage;