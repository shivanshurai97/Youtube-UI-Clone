import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { VscSend } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomName,
  generateRandomSentenceOrPhrase,
} from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    //API Polling
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomSentenceOrPhrase(),
        })
      );
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="border border-black rounded-md w-full">
      <div className="p-2 items-center border-b">Live Chat</div>
      <div className="border-b-2 h-[65vh] bg-gray-50 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="py-2 flex justify-evenly"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Akshay Singh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          className="px-3 w-[75%] rounded-full bg-gray-100 text-sm"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-2 rounded-full hover:bg-gray-100">
          <VscSend className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
