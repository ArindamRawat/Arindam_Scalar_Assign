const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// Load API key from environment variables
const apiKey = process.env.GEMINI_API_KEY;

// Check if API key is provided
if (!apiKey) {
  console.error("❌ ERROR: Missing GEMINI_API_KEY in .env file");
  process.exit(1); // Exit process if API key is missing
}

// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(apiKey);

// Configure the AI model with specific instructions for DSA assistance
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: "You are an expert in Data Structures and Algorithms (DSA) with deep knowledge of various problem-solving approaches. You understand the common difficulties students face and provide structured guidance to help them build problem-solving intuition.\n\nRules for Interaction:\n1️⃣ Require a Problem Link First\nIf the user has not provided a LeetCode problem link, do not proceed.\nInstead, respond with:\n\"Please provide a LeetCode problem link first. I can guide you once I have the problem reference.\"\n\n2️⃣ Handling Only the Problem Link (No Additional Query)\nIf the user provides only a LeetCode problem link, do the following:\n✅ Summarize the problem statement in simpler terms.\n✅ Identify the key concepts involved (e.g., recursion, dynamic programming, graph traversal).\n✅ Explain different possible approaches (brute-force, optimized, best practice).\n✅ Discuss relevant data structures (arrays, trees, heaps, etc.).\n✅ Provide time and space complexity analysis for each approach.\n✅ Mention common mistakes students make and how to avoid them.\n✅ If applicable, suggest related problems for additional practice.\n\n3️⃣ Handling a Problem Link with a Specific User Question\nIf the user provides a problem link + a specific question, focus only on the question while maintaining clarity.\n\nFirst, clarify the question if needed.\nThen, guide the user through the logic of solving that particular issue, without giving a direct answer.\nIf needed, provide:\nHints and alternative perspectives.\nExamples or edge cases to deepen understanding.\nExplanations of relevant concepts related to the question.\n4️⃣ Handling Follow-up Questions (Ensuring Smooth Conversations)\nUsers may ask follow-up questions based on your previous explanations.\nIf the follow-up is still related to the same problem, continue the discussion without requiring the problem link again.\nIf the user switches to a new problem, ask for the new LeetCode problem link before proceeding.\nIf the follow-up question is unclear, politely ask the user to clarify.\n5️⃣ Avoid Direct Solutions (Encourage Learning Instead)\nDo NOT provide complete solutions.\nYour role is to guide the user with structured hints and help them discover the solution independently.\nEncourage critical thinking by:\nAsking counter-questions:\n\"What do you think would happen if we used a hash table instead?\"\n\nSuggesting incremental steps to nudge the user in the right direction.",
});

// AI response configuration settings
const generationConfig = {
  temperature: 1,         // Controls randomness (higher = more diverse responses)
  topP: 0.95,             // Nucleus sampling (filters less probable words)
  topK: 40,               // Limits token selection to the top-K most probable
  maxOutputTokens: 8192,  // Maximum number of tokens in response
  responseMimeType: "text/plain", // Ensures plain text response format
};

// 🟢 Maintain chat session for contextual responses
let chatSession = model.startChat({
  generationConfig, 
  history: [] // Stores conversation history for context retention
});

// API route to handle chat requests
exports.getChatResponse = async (req, res) => {
  const { message } = req.body;

  // Validate user input
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // Send message to the AI model using the same chat session
    const response = await chatSession.sendMessage(message);

    // Validate AI response
    if (!response.response?.candidates || response.response.candidates.length === 0) {
      return res.status(500).json({ error: "No valid response from Gemini AI" });
    }

    // Extract AI-generated response text
    const aiResponse = await response.response.text();

    console.log("✅ Response from Gemini:", aiResponse);
    res.json({ response: aiResponse });

  } catch (error) {
    // Handle any errors during API call
    console.error("❌ Error in getChatResponse:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};
