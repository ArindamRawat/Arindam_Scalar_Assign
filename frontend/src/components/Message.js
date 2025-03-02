import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./Chat.css";

/**
 * Message Component - Renders a chat message with Markdown support.
 *
 * @param {string} text - The message content.
 * @param {string} sender - The sender type ("user" or "bot").
 */
const Message = ({ text, sender }) => {
  // Convert Markdown to HTML and sanitize it to prevent XSS attacks
  const formattedText = DOMPurify.sanitize(marked(text));

  return (
    <div className={`message ${sender}`}>
      {/* Render sanitized HTML content */}
      <div dangerouslySetInnerHTML={{ __html: formattedText }} />
    </div>
  );
};

export default Message;
