import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagicWandSparkles,
  faStar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Writings from "./Writings";
import sandeep from "../assets/sandeep.jpg";
import desc from "../assets/desc.png";
const cards = [
  {
    username: "sandeep",
    photo: sandeep,
    text: "text",
    photo1: desc,
  },
  {
    username: "suresh",
    photo: sandeep,
    text: "text",
    photo1: desc,
  },
  {
    username: "jayanth",
    photo: sandeep,
    text: "text",
    photo1: desc,
  },
];
const RightContent = () => {
  return (
    <div className="w-4/5  bg-white/50 rounded-md h-[87vh]">
      {/* top Header */}
      <div className="bg-white/40 rounded-md flex items-center px-3 py-2 w-[99%] mx-auto mt-2 space-x-5 cursor-pointer">
        <div className="flex gap-1 items-center text-lg font-normal text-[#2563EB]">
          <FontAwesomeIcon icon={faMagicWandSparkles} />
          <p className="hover:underline">Personalized</p>
        </div>
        <div className="flex gap-1 items-center text-lg font-normal text-[#2563EB]">
          <FontAwesomeIcon icon={faStar} />
          <p className="hover:underline">Featured</p>
        </div>
        <div className="flex gap-1 items-center text-lg font-normal text-[#2563EB] hover:underline-offset-4">
          <FontAwesomeIcon icon={faClock} />
          <p className="hover:underline">Recent</p>
        </div>
      </div>
      {/* card  */}
      {cards.map((cards, index) => {
        return (
          <Writings
            key={index}
            username={cards.username}
            photo={cards.photo}
            text={cards.text}
            photo1={cards.photo1}
          />
        );
      })}
    </div>
  )
};

export default RightContent;
