import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";
import InputBox from "./InputBox";
import "./Chat.css";

const Chat = () => {
  // State to manage chat messages
  const [messages, setMessages] = useState([]);

  /**
   * Handles sending a user message and fetching bot response.
   * @param {string} message - The message entered by the user.
   */
  const sendMessage = async (message) => {
    // Add user message to the chat
    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);

    try {
      // Send user message to backend API
      const response = await axios.post(
        "https://arindam-scalar-assign.onrender.com/api/chat",
        { message }
      );

      // Append bot response to the chat
      setMessages([...newMessages, { text: response.data.response, sender: "bot" }]);
    } catch (error) {
      console.error("❌ Error fetching response:", error);
    }
  };

  return (
    <div className="chat-container">
      {/* Chat message display area */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      {/* Input field for user to send messages */}
      <InputBox sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
