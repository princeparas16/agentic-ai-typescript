# LangChain + Gemini with TypeScript

A minimal, beginner-friendly setup demonstrating how to use **LangChain.js** with **Google's Gemini 2.5 Flash model** in **TypeScript**.

---

## 🚀 Features

- **LangChain.js Integration**: Uses `@langchain/google-genai` to interact with Gemini models.
- **Pure TypeScript**: Configured for modern ESM (`"type": "module"`) with support for top-level `await`.
- **Zero-Build Execution**: Uses [`tsx`](https://github.com/privatenumber/tsx) to run TypeScript files directly without a manual compile step.
- **System Prompts & Chat Messages**: Demonstrates structured prompt handling via `SystemMessage` and `HumanMessage`.

---

## 📦 Project Structure

```text
.
├── demo.ts           # Main entry point (LangChain invocation script)
├── .env.example      # Template for environment variables
├── .gitignore        # Ignores node_modules, dist, and .env
├── package.json      # Dependencies and npm scripts
└── tsconfig.json     # TypeScript configuration
```

---

## 🛠️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/princeparas16/agentic-ai-typescript.git
cd agentic-ai-typescript
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure API Key
Create a `.env` file from the provided example:
```bash
cp .env.example .env
```

Open `.env` and insert your Google Gemini API key:
```env
GOOGLE_API_KEY=your_actual_gemini_api_key_here
```
> 💡 Get an API key for free at [Google AI Studio](https://aistudio.google.com/apikey).

---

## ▶️ Running the Code

Execute the demo script using npm:

```bash
npm start
```

Or run directly with `tsx`:

```bash
npx tsx demo.ts
```

---

## 💡 Code Overview

```typescript
import "dotenv/config";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

// 1. Initialize Gemini model
const model = new ChatGoogleGenerativeAI({ 
  model: "gemini-2.5-flash" 
});

// 2. Invoke model with system & user prompt
const response = await model.invoke([
  new SystemMessage("You are a helpful assistant. Keep responses short."),
  new HumanMessage("What is Javascript in one sentence?"),
]);

// 3. Output result
console.log(response.content);
```

---

## 🧰 Tech Stack

- **[LangChain.js](https://js.langchain.com/)**: Framework for developing applications with LLMs.
- **[Google Generative AI SDK](https://www.npmjs.com/package/@langchain/google-genai)**: Official LangChain integration for Gemini.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed JavaScript syntax.
- **[tsx](https://tsx.is/)**: TypeScript Execute (fast, zero-config TS runner).
- **[dotenv](https://github.com/motdotla/dotenv)**: Module to load environment variables from `.env`.
