import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const Main = () => {
  return (
    <div className="flex gap-2 w-[99%] mx-auto">
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Main;
