import { useState } from "react";
import { Send } from "lucide-react";

const ChatInput = ({ onSend }) => {

  const [value, setValue] = useState("");

  const handleSubmit = () => {

    if (!value.trim()) return;

    onSend(value);

    setValue("");
  };

  return (

    <div
      className="
      border-t
      border-zinc-800
      p-4
      "
    >

      <div
        className="
        flex
        items-center
        gap-3
        bg-zinc-900
        rounded-2xl
        px-4
        py-3
        "
      >

        <input
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }
          placeholder="Ask about PMCF, MDR..."
          className="
          flex-1
          bg-transparent
          outline-none
          "
        />

        <button
          onClick={handleSubmit}
          className="
          p-2
          rounded-xl
          bg-white
          text-black
          "
        >
          <Send size={18} />
        </button>

      </div>

    </div>

  );
};

export default ChatInput;