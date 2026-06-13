import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import SourceCard from "../source/SourceCard";

const ChatMessage = ({ message }) => {

  const isUser =
    message.role === "user";

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`flex mb-6 ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >

      <div
        className={`
          max-w-3xl
          rounded-2xl
          px-5
          py-4

          ${
            isUser
              ? "bg-white text-black"
              : "bg-zinc-900 border border-zinc-800"
          }
        `}
      >

        <ReactMarkdown>
          {message.content}
        </ReactMarkdown>

        {/* Sources */}
        {!isUser &&
          message.sources?.map(
            (source, index) => (
              <SourceCard
                key={index}
                source={source}
              />
            )
          )}

      </div>

    </motion.div>
  );
};

export default ChatMessage;