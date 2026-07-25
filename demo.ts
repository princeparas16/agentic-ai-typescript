import "dotenv/config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const model = new ChatGoogleGenerativeAI({ model: "gemini-2.5-flash" });

const response = await model.invoke([
  new SystemMessage("You are a helpful assistant. Keep responses short."),
  new HumanMessage("What is Javascript in one sentence?"),
]);

console.log(response.content);
