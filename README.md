# 🤖 Google Search AI Agent CLI

An AI-powered command-line assistant built with **LangChain.js** that allows users to ask questions in natural language and retrieve relevant information from Google Search. The agent uses an LLM and search tools to understand user queries, perform web searches, and generate easy-to-understand responses based on the retrieved information.

## 🚀 Features

- 🔍 **Google Search Integration** — Search the web for relevant information.
- 🧠 **AI-Powered Responses** — Use a language model to understand questions and generate answers.
- 🛠️ **Tool Calling** — Allow the AI agent to decide when to use the Google Search tool.
- 💻 **CLI Interface** — Interact with the AI agent directly through the terminal.
- 📄 **Search Results Processing** — Retrieve and process search results to answer user queries.
- 🔄 **Dynamic Queries** — Ask different questions without modifying the source code.
- ⚡ **LangChain.js Integration** — Build an AI agent using LangChain.js and its tool-calling capabilities.

## 🧰 Technologies Used

- **JavaScript (ES Modules)** — Core programming language.
- **Node.js** — JavaScript runtime environment.
- **LangChain.js** — AI agent and tool integration framework.
- **LLM (Groq)** — Language model for understanding queries and generating responses.
- **Google Search Tool** — Retrieves relevant web search results.
- **dotenv** — Manages environment variables.
- **Chalk** — Adds colors and formatting to terminal output.

## 📋 Prerequisites

Before running the project, make sure you have:

- [Node.js](https://nodejs.org/) installed.
- npm installed.
- A Groq API key, if you are using a Groq-hosted language model.
- The API key or configuration required by your Google Search provider.

## ⚙️ Installation

**1. Clone the repository**

```bash
git clone https://github.com/MdAffanAlam/GoogleSearch-agent.git
```

**2. Navigate to the project directory**

```bash
cd GoogleSearch-agent
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key
GOOGLE_SEARCH_API_KEY=your_google_search_api_key
```

Replace the placeholder values with your actual credentials. Update the variable names according to the search provider and libraries used in your implementation.

**5. Run the application**

```bash
node index.js
```

If your main JavaScript file has a different name, replace `index.js` with the correct filename.

## 💡 Example Usage

```text
Welcome to Google Search AI Agent!

You: Who is Barack Obama?

AI Agent: Barack Obama is an American politician who served
as the 44th president of the United States from 2009 to 2017.

Search Results:
- Relevant web pages
- Information retrieved from Google Search

You: What is artificial intelligence?

AI Agent: Artificial intelligence (AI) is a field of computer
science focused on building systems that can perform tasks
that typically require human intelligence.
```

*The output above is illustrative; actual responses depend on the language model and search results.*

## 🔄 How It Works

1. **User Input:** The user enters a question in the terminal.
2. **AI Processing:** The language model analyzes the user's query.
3. **Tool Selection:** The AI agent decides whether a web search is needed.
4. **Google Search:** The search tool retrieves relevant results from the web.
5. **Result Processing:** The agent receives and processes the tool output.
6. **Response Generation:** The language model generates a user-friendly answer.
7. **CLI Output:** The final response is displayed in the terminal.

## 🏗️ Project Architecture

```text
User
 |
 v
CLI Input (Node.js)
 |
 v
LangChain.js AI Agent
 |
 v
Language Model (Groq)
 |
 v
Google Search Tool
 |
 v
Search Results
 |
 v
AI Response Generation
 |
 v
Terminal Output
```

## 📚 Key Concepts Learned

- Building AI agents with LangChain.js.
- Integrating external search tools with an LLM.
- Understanding tool calls and tool results.
- Processing user queries dynamically.
- Managing environment variables securely.
- Working with Node.js terminal input and output.
- Understanding the interaction between an AI model and external tools.

## 🔐 Environment Variables and Security

- Never commit your `.env` file to GitHub.
- Add `.env` to your `.gitignore` file.
- Never expose API keys in source code or terminal screenshots.
- Review search-provider usage limits and pricing before deployment.

Example `.gitignore`:

```gitignore
node_modules/
.env
```

## 🔮 Future Improvements

- Add conversation memory for follow-up questions.
- Display search sources and URLs alongside answers.
- Add error handling for API failures and empty search results.
- Support multiple search providers.
- Add streaming responses for a better CLI experience.
- Implement a structured view of tool calls, tool inputs, and tool outputs.
- Add conversation history and configurable AI models.

## 🎯 Project Goal

The goal of this project is to understand how AI agents interact with external tools and use real-world information to answer user questions. It demonstrates the practical use of **LangChain.js, LLMs, tool calling, and web search** in a command-line application.

## 👨‍💻 Author

**MD Affan Alam**

- GitHub: [MdAffanAlam](https://github.com/MdAffanAlam)
- Portfolio: [affandevfolio.netlify.app](https://affandevfolio.netlify.app)

---

⭐ If you find this project useful, consider giving the repository a star!
