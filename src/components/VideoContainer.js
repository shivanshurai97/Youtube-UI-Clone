import React, { useEffect, useRef, useState } from "react";
import {
  YOUTUBE_VIDEOS_API,
  generateNextPageVideoApi,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videosList, setVideosList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const sentinelRef = useRef(null);
  useEffect(() => {
    fetchVideos(YOUTUBE_VIDEOS_API);
  }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        fetchVideos(generateNextPageVideoApi(nextPageToken));
      }
    });

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [loading]);

  const fetchVideos = async (url) => {
    try {
      setLoading(true);
      const data = await fetch(url);
      const json = await data.json();
      const newData = json.items;
      console.log(json);
      setVideosList((prevData) => [...prevData, ...newData]);
      setNextPageToken(json.nextPageToken);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6 flex flex-wrap justify-evenly">
      {videosList.map((item) => (
        <Link key={item.id} to={"/watch?v=" + item.id}>
          <VideoCard item={item} />
        </Link>
      ))}
      {loading && <Shimmer />}
      <div ref={sentinelRef}></div>
    </div>
  );
};

export default VideoContainer;
