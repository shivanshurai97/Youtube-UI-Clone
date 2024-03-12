import React from "react";
import ButtonList from "./ButtonList";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="flex1 overflow-hidden">
      <ButtonList />
      <Outlet />
    </div>
  );
};

export default MainContainer;
