import React from "react";

const Comment = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="flex p-1 bg-gray-100">
      <div className="p-2">
        <img
          className="w-8 h-8"
          alt="user"
          src="https://static.thenounproject.com/png/16571-200.png"
        />
      </div>

      <div className="pl-2">
        <h1 className="font-bold">{name}</h1>
        <h1 className="pl-1">{text}</h1>
      </div>
    </div>
  );
};

export default Comment;
