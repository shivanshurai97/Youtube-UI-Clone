import React from "react";
import { useSelector } from "react-redux";

const ShimmerCard = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`${isMenuOpen ? "w-[360px]" : "w-80"} h-80 m-2 rounded-md`}>
      <div
        className={`${
          isMenuOpen ? "w-[360px] h-52" : "w-80 h-44"
        }  rounded-lg bg-gray-200 animate-pulse`}
      ></div>
      <div
        className={`${
          isMenuOpen ? "w-80" : "w-72"
        } h-8 my-1 mx-2 rounded-lg bg-gray-200 animate-pulse`}
      ></div>
      <div
        className={`${
          isMenuOpen ? "w-48" : "w-40"
        } h-8 my-1 mx-2 rounded-lg bg-gray-200 animate-pulse`}
      ></div>
    </div>
  );
};

export default ShimmerCard;
