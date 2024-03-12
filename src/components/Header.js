import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SUGGESTIONS_API, generateProxyUrl } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Debouncing & Caching implemented
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(generateProxyUrl(SUGGESTIONS_API) + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = () => {
    navigate(`/results?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleSearchSuggestion = (searchText) => {
    setSearchQuery(searchText);
    setShowSuggestions(false);
    navigate(`/results?q=${encodeURIComponent(searchText)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShowSuggestions(false);
      handleSearch();
    }
  };

  return (
    <div className="grid grid-flow-col p-5">
      <div className="col-span-1 flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-8 px-4"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div className="relative">
          <div className="flex">
            <input
              className="w-2/4 border border-gray-400 py-2 px-5 ml-20 rounded-l-full"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              onMouseDown={(e) => {
                setShowSuggestions(true);
              }}
              onKeyDown={handleKeyDown}
            />
            <button
              className="py-2 px-3 bg-gray-200 border border-gray-400 rounded-r-full"
              onClick={handleSearch}
            >
              <HiOutlineSearch className="h-6 w-6" />
            </button>
          </div>

          {showSuggestions && (
            <div className="absolute w-2/4 z-10 ml-20 rounded-xl bg-white">
              <ul className="py-2">
                {suggestions.map((searchText, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer flex items-center"
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      handleSearchSuggestion(searchText);
                    }}
                  >
                    <HiOutlineSearch />
                    <p className="px-2">{searchText}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://static.thenounproject.com/png/16571-200.png"
        />
      </div>
    </div>
  );
};

export default Header;
