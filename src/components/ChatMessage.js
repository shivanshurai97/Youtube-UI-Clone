import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="px-4 py-1 flex shadow-sm">
      <img
        className="h-5 mt-1"
        alt="user-icon"
        src="https://static.thenounproject.com/png/16571-200.png"
      />
      <div className="px-2">
        <span className="pr-1 text-sm font-medium text-gray-500">{name}</span>
        <span className="px-1 text-sm">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
