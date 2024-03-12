import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { generateVideoUrl } from "../utils/constants";
import CommentList from "./CommentList";
import { commentsData } from "../utils/mockCommentsData";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videoData, setVideoData] = useState(null);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const data = await fetch(generateVideoUrl(searchParams.get("v")));
    const json = await data.json();
    setVideoData(json.items[0]);
  };
  return (
    <div className="w-full">
      <div className="px-5 flex">
        <div className="mr-4">
          <iframe
            className="rounded-xl h-[65vh] w-[65vw]"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?si=nkCzU3UGVbIC3ynJ"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="p-2 font-bold text-xl">
            {videoData?.snippet?.localized?.title}
          </h1>
        </div>
        <LiveChat />
      </div>
      <div className="px-7 mt-4">
        <h1 className="font-bold text-lg">Comments:</h1>
        <CommentList comments={commentsData} />
      </div>
    </div>
  );
};

export default WatchPage;
