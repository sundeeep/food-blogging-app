import React from "react";
import logo from "../assets/blog.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPen } from "@fortawesome/free-solid-svg-icons";
const Header = ({ OpenEditModal }) => {
  return (
    <div className="h-[60px] w-[99vw] mx-auto bg-white/50 rounded-md flex items-center py-10 justify-between">
      {/* image */}
      <div className="px-4">
        <img src={logo} alt="logo" className="h-[60px]" />
      </div>
      {/* navbar */}
      <div className="flex gap-3 items-center w-[50%] mx-auto">
        <button className="rounded-full px-3 py-2 border border-[#DCDCDC] text-lg font-medium text-[#2563EB] hover:bg-[#dcdcdc]">
          My Feed
        </button>
        <button className="flex items-center gap-3 w-[70%]">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[#fff] text-[20px]"
          />
          <input
            type="text"
            placeholder="Search Blog"
            className="text-base font-medium rounded-full px-4 py-2 outline-none w-full"
          />
        </button>
      </div>
      {/* user */}
      <div className="flex items-center gap-3 px-3">
        <button
          onClick={() => OpenEditModal()}
          className="flex items-center gap-2 text-[#fff] bg-[#2563EB] rounded-full px-3 py-2 hover:bg-[#3B82F6]"
        >
          <FontAwesomeIcon icon={faPen} className="text-base" />
          <p className=" text-lg font-medium">Write</p>
        </button>
        <img
          src="https://avatars.githubusercontent.com/u/67505311?v=4"
          alt="user-img"
          className="rounded-full h-[50px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
