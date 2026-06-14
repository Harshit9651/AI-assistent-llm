import axios from "axios";
const API_URL =  import.meta.env.VITE_API_URL;
export const askQuestion = async (question) => {
  const { data } = await axios.post(
     `${API_URL}/api/chat`,
    {
      question,
    }
  );

  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content: data.answer,
    timestamp: Date.now(),
    sources:
      data.sources?.map(
        (item) => item.source
      ) || [],
  };
};