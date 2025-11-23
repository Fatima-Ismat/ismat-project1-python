Role: Senior Python AI Engineer

Objective: Build a PDF Assistant with Summarization and Quiz Generation using Chainlit and OpenAgents SDK with Gemini model.

1. Project Overview

The goal is to create an intelligent web-based assistant that:

Accepts PDF uploads.

Summarizes the PDF content clearly.

Generates quizzes (MCQs) from the PDF content.

Persists user data (name, preferences) locally (optional memory for future use).

Components:

UI: Chainlit (web interface)

Model: Google Gemini (gemini-2.0-flash) via OpenAgents SDK

Tools: Summarizer, Quiz Generator

Memory: JSON file (user_profile.json) to store user preferences (optional)

2. Critical Technical Constraints

Zero-Bloat Protocol: Only implement required features. No extra UI or unnecessary error handling.

SDK Specificity: Use openai-agents SDK, not standard openai library.

API Keys: Load Gemini API key from .env (do not hardcode).

Tool Integration: Register tools exactly as per OpenAgents SDK docs.

3. Architecture & File Structure
.
├── .env                  # GEMINI_API_KEY
├── agent.py              # Agent setup & tool bindings
├── prompts.py            # Summarizer & Quiz instructions
├── utils.py              # PDF text extraction
├── app.py                # Chainlit UI & event handlers
├── user_profile.json     # Optional memory storage
└── pyproject.toml        # Dependencies