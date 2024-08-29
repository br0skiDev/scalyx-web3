"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import {
  RiDiscordFill,
  RiFacebookBoxFill,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiRedditFill,
} from "react-icons/ri";

const SocialsBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialsToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-4 top-16 flex flex-col space-y-2 mt-2 text-3xl z-50">
      <div className="absolute top-[-5px] right-[-5px] flex items-center text-xs select-none">
        Socials
      </div>
      <button
        onClick={socialsToggle}
        className="hover:scale-110 transition duration-200"
      >
        {!isOpen ? <MdKeyboardDoubleArrowDown /> : <MdKeyboardDoubleArrowUp />}
      </button>
      {isOpen && (
        <>
          <Link
            href={"/"}
            target="_blank"
            onClick={socialsToggle}
            className="hover:scale-125 transition duration-200"
          >
            <RiDiscordFill />
          </Link>
          <Link
            href={"https://www.reddit.com/user/Scalyx_Token/"}
            target="_blank"
            onClick={socialsToggle}
            className="hover:scale-125 transition duration-200"
          >
            <RiRedditFill />
          </Link>
          <Link
            href={"https://x.com/ScalyxToken"}
            target="_blank"
            onClick={socialsToggle}
            className="hover:scale-125 transition duration-200"
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=61561780352205"}
            target="_blank"
            onClick={socialsToggle}
            className="hover:scale-125 transition duration-200"
          >
            <RiFacebookCircleFill />
          </Link>
          <Link
            href={"https://www.instagram.com/ScalyxToken"}
            target="_blank"
            onClick={socialsToggle}
            className="hover:scale-125 transition duration-200"
          >
            <RiInstagramFill />
          </Link>
          <Link
            href={"https://t.me/Scalyx1"}
            target="_blank"
            onClick={socialsToggle}
            className="hover:scale-125 transition duration-200"
          >
            <FaTelegram />
          </Link>
        </>
      )}
    </div>
  );
};

export default SocialsBar;
