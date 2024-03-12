import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { generateSearchVideoUrl } from "../utils/constants";
import SearchResultCard from "./SearchResultCard";
import Loader from "./Loader";

const SearchResults = () => {
  const [searchVideoResults, setSearchVideoResults] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const sentinelRef = useRef(null);

  useEffect(() => {
    setSearchVideoResults([]);
    getVideoResults();
  }, [searchParams]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && nextPageToken) {
        getVideoResults();
      }
    });

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [loading]);

  const getVideoResults = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        generateSearchVideoUrl(searchParams.get("q"), nextPageToken)
      );
      const json = await data.json();
      const newData = json.items;
      setSearchVideoResults((prevData) => [...prevData, ...newData]);
      setNextPageToken(json.nextPageToken);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto m-2 px-20 py-4">
      {searchVideoResults.map((searchVideo) => (
        <Link
          key={searchVideo?.id?.videoId}
          to={"/watch?v=" + searchVideo?.id?.videoId}
        >
          <SearchResultCard video={searchVideo} />
        </Link>
      ))}
      {loading && <Loader />}
      <div ref={sentinelRef}></div>
    </div>
  );
};

export default SearchResults;
