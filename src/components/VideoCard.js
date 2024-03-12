import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ item }) => {
  const { snippet, statistics } = item;
  const { thumbnails, localized, channelTitle } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`${isMenuOpen ? "w-[360px]" : "w-80"} h-80 m-2 rounded-md`}>
      <img
        className={`${
          isMenuOpen ? "w-[360px]" : "w-80"
        } rounded-lg object-cover`}
        alt="thumbnail"
        src={thumbnails.maxres ? thumbnails.maxres.url : thumbnails.medium.url}
      />
      <h1 className="px-2 font-bold whitespace-normal overflow-hidden text-ellipsis line-clamp-2">
        {localized.title}
      </h1>
      <h1 className="px-2">{channelTitle}</h1>
      <h1 className="px-2">{statistics.viewCount} views</h1>
    </div>
  );
};

export default VideoCard;
