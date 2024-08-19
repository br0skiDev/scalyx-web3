import Link from "next/link";
import React from "react";
import { FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { RiDiscordFill, RiInstagramFill } from "react-icons/ri";

const SocialsBar = () => {
  return (
    <div className="fixed right-4 top-16 flex flex-col space-y-2 mt-2 text-3xl z-50">
      <Link href={"/"}>
        <RiDiscordFill />
      </Link>
      <Link href={"/"}>
        <FaSquareXTwitter />
      </Link>
      <Link href={"/"}>
        <RiInstagramFill />
      </Link>
      <Link href={"/"}>
        <FaTelegram />
      </Link>
    </div>
  );
};

export default SocialsBar;
