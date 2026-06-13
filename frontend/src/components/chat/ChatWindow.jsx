import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import Loader from "../common/Loader";

const ChatWindow = ({
  messages,
  loading,
}) => {

  const bottomRef = useRef(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);

  return (
    <div
      className="
      flex-1
      overflow-y-auto
      p-6
      "
    >

      {messages.map((message) => (

        <ChatMessage
          key={message.id}
          message={message}
        />

      ))}

      {loading && <Loader />}

      <div ref={bottomRef} />

    </div>
  );
};

export default ChatWindow;