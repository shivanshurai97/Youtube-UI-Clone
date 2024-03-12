import React from "react";

const SearchResultCard = ({ video }) => {
  const { title, channelTitle, description } = video?.snippet;
  const { url } = video?.snippet?.thumbnails?.high;
  return (
    <div className="grid grid-cols-9 gap-4 py-4 w-full">
      <div className="col-span-4 w-full">
        <img
          className="w-full h-[281px] rounded-lg object-cover"
          alt="thumbnail"
          src={url}
        />
      </div>
      <div className="col-span-5 p-2 w-full">
        <h1 className="text-xl font-bold">{title}</h1>
        <h1 className="p-2 text-sm font-light">{channelTitle}</h1>
        <h1 className="p-1 text-xs font-normal">{description}</h1>
      </div>
    </div>
  );
};

export default SearchResultCard;
