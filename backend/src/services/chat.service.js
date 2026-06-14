const {
  ChatGoogleGenerativeAI
} = require("@langchain/google-genai");

const llm =
new ChatGoogleGenerativeAI({
  model:"gemini-2.5-flash",
  apiKey:process.env.GOOGLE_API_KEY
});

const askGemini = async(question)=>{

   const response =
   await llm.invoke(question);

   return response.content;
};

module.exports = {
   askGemini
};