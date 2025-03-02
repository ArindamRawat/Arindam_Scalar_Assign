import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./Chat.css";

const Message = ({ text, sender }) => {
  // Convert markdown to HTML and sanitize it
  const formattedText = DOMPurify.sanitize(marked(text));

  return (
    <div className={`message ${sender}`}>
      <div dangerouslySetInnerHTML={{ __html: formattedText }} />
    </div>
  );
};

export default Message;
