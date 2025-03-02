import React, { useState } from "react";
import axios from "axios";
import Message from "./Message";
import InputBox from "./InputBox";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);

    try {
      const response = await axios.post("https://arindam-scalar-assign.onrender.com/api/chat", { message });
      setMessages([...newMessages, { text: response.data.response, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <InputBox sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
