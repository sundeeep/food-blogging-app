import React from "react";

const Writings = ({ username, photo, text, photo1 }) => {
  return (
    <div className="bg-white/30 rounded-md w-[99%] mx-auto mt-2 px-3 py-2">
      {/* upper */}
      <div className="flex items-center gap-2">
        {/* img */}
        <img
          src={photo}
          alt="user-img"
          className="rounded-full h-[50px] cursor-pointer"
        />
        <p className="text-lg font-medium ">{username}</p>
      </div>
      {/* lower */}
      <div className="flex space-x-3 px-3">
        <div className="w-4/5">
          <p className="flex items-center justify-center h-full">{text}</p>
        </div>
        <div className="w-[200px]">
          <img
            src={photo1}
            alt="describing text"
            className="h-[100%] w-[100%] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
};

export default Writings;
