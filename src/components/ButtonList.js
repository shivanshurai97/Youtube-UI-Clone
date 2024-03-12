import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { itemsList } from "../utils/constants";

const ButtonList = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container.scrollLeft === 0) {
      setShowLeftButton(false);
    } else {
      setShowLeftButton(true);
    }

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      setShowRightButton(false);
    } else {
      setShowRightButton(true);
    }
  }, [scrollPosition]);

  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    const container = containerRef.current;
    container.scrollLeft = newScrollPosition;
  };

  return (
    <div className="relative px-6">
      <div className="flex items-center">
        {showLeftButton && (
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-full hover:bg-gray-500 hover:text-white"
            onClick={() => handleScroll(-200)}
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>
        )}
        <div
          ref={containerRef}
          className="flex overflow-hidden scroll-smooth mx-6"
        >
          {itemsList.map((item, index) => (
            <Button key={index} name={item} />
          ))}
        </div>
        {showRightButton && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-full hover:bg-gray-500 hover:text-white"
            onClick={() => handleScroll(200)}
          >
            <FaChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ButtonList;
