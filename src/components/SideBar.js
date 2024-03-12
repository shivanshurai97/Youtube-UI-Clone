import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubegaming, SiLinkfire } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GiClapperboard } from "react-icons/gi";
import { PiMusicNoteLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";
import { GoTrophy, GoLightBulb } from "react-icons/go";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early Return
  if (!isMenuOpen) return null;
  return (
    <div className="w-1/10">
      <div className="py-2 px-6 text-sm border-b border-gray-200">
        <Link
          to="/"
          className="w-full my-1 px-3 py-1 flex items-center rounded-md hover:bg-gray-200"
        >
          <GoHome className="h-6 w-6 mr-3" />
          <h1 className="p-1">Home</h1>
        </Link>
        <Link className="w-full my-1 px-3 py-1 flex items-center rounded-md hover:bg-gray-200">
          <SiYoutubeshorts className="h-6 w-6 mr-3" />
          <h1 className="p-1">Shorts</h1>
        </Link>
        <Link className="w-full my-1 px-3 py-1 flex items-center rounded-md hover:bg-gray-200">
          <MdOutlineSubscriptions className="h-6 w-6 mr-3" />
          <h1 className="p-1">Subscriptions</h1>
        </Link>
      </div>
      <div className="py-2 px-6 border-b border-gray-200">
        <h1 className="px-3 py-1 font-bold">Explore</h1>
        <Link className="w-full my-1 px-3 flex items-center rounded-md hover:bg-gray-200">
          <SiLinkfire className="h-6 w-6 mr-3" />
          <h1 className="p-1">Trending</h1>
        </Link>
        <Link className="w-full my-1 px-3 flex items-center rounded-md hover:bg-gray-200">
          <GiClapperboard className="h-6 w-6 mr-3" />
          <h1 className="p-1">Movies</h1>
        </Link>
        <Link className="w-full my-1 px-3 flex items-center rounded-md hover:bg-gray-200">
          <PiMusicNoteLight className="h-6 w-6 mr-3" />
          <h1 className="p-1">Music</h1>
        </Link>
        <Link className="w-full my-1 px-3 flex items-center rounded-md hover:bg-gray-200">
          <HiOutlineShoppingBag className="h-6 w-6 mr-3" />
          <h1 className="p-1">Shopping</h1>
        </Link>
        <Link className="w-full my-1 px-3 flex items-center rounded-md hover:bg-gray-200">
          <SiYoutubegaming className="h-6 w-6 mr-3" />
          <h1 className="p-1">Gaming</h1>
        </Link>
        <Link className="w-full my-1 px-3 flex items-center rounded-md hover:bg-gray-200">
          <IoNewspaperOutline className="h-6 w-6 mr-3" />
          <h1 className="p-1">News</h1>
        </Link>
        <Link className="w-full my-1 px-3 flex items-center rounded-md hover:bg-gray-200">
          <GoTrophy className="h-6 w-6 mr-3" />
          <h1 className="p-1">Sports</h1>
        </Link>
        <Link className="w-full my-1 px-3 flex items-center rounded-md hover:bg-gray-200">
          <GoLightBulb className="h-6 w-6 mr-3" />
          <h1 className="p-1">Learning</h1>
        </Link>
      </div>
      <div className="py-2 px-6 border-b border-gray-200">
        <h1 className="px-3 py-1 font-bold">Subscriptions</h1>
        <ul className="px-3 py-1 text-base whitespace-nowrap text-ellipsis overflow-hidden">
          <li className="py-1 px-2">Akshay Saini</li>
          <li className="py-1 px-2">Pepcoding</li>
          <li className="py-1 px-2">take U Forward</li>
          <li className="py-1 px-2">T-Series</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
