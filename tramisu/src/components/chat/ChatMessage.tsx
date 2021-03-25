import React from "react";

type ChatMessageProps = { text: string, isFromUser: boolean; };
const ChatMessage: React.FC<ChatMessageProps> = ({ text, isFromUser }: ChatMessageProps) => {
  const messageClass = isFromUser ? "is-primary" : "is-link";
  return (
    <div className={`notification ${messageClass}`}
      style={{
        marginBottom: 20,
        marginRight: 10
      }}>
      <span style={{ fontSize: 16 }}>{text}</span>
    </div>);
};

export default ChatMessage;