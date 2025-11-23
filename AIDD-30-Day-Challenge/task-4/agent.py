import os
from dotenv import load_dotenv
from agents import OpenAIChatCompletionsModel, AsyncOpenAI, Agent
from prompts import main_agent_prompt, summarizer_prompt, quiz_generator_prompt

load_dotenv()

gemini_api_key = os.getenv("GEMINI_API_KEY")
if not gemini_api_key:
    raise ValueError("GEMINI_API_KEY not found in environment variables.")

# Gemini client
external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

# Model
model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=external_client,
)

# Tools
summarizer_agent = Agent(
    name="PDF Summarizer",
    instructions=summarizer_prompt,
    model=model,
)

quiz_generator_agent = Agent(
    name="Quiz Generator",
    instructions=quiz_generator_prompt,
    model=model,
)

# Main agent
main_agent = Agent(
    name="PDF Assistant",
    instructions=main_agent_prompt,
    model=model,
    tools=[
        summarizer_agent.as_tool(
            tool_name="summarize_pdf",
            tool_description="Summarizes the uploaded PDF in a structured format with key points.",
        ),
        quiz_generator_agent.as_tool(
            tool_name="generate_quiz",
            tool_description="Generates a comprehensive quiz from the PDF content with correct answers highlighted.",
        ),
    ],
)
