import Link from "next/link";
import React from "react";
import { FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import {
  RiDiscordFill,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiRedditFill,
} from "react-icons/ri";

export const SocialsBottom = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-background py-3 mx-4 rounded-3xl">
      <h1 className="font-black">SOCIALS</h1>
      <div className="space-x-4 flex items-center justify-center">
        <Link
          href={"/"}
          target="_blank"
          className="hover:scale-125 transition duration-200"
        >
          <RiDiscordFill className="w-[36px] h-[36px]" />
        </Link>
        <Link
          href={"https://www.reddit.com/user/Scalyx_Token/"}
          target="_blank"
          className="hover:scale-125 transition duration-200"
        >
          <RiRedditFill className="w-[36px] h-[36px]" />
        </Link>
        <Link
          href={"https://x.com/ScalyxToken"}
          target="_blank"
          className="hover:scale-125 transition duration-200"
        >
          <FaSquareXTwitter className="w-[36px] h-[36px]" />
        </Link>
        <Link
          href={"https://www.facebook.com/profile.php?id=61561780352205"}
          target="_blank"
          className="hover:scale-125 transition duration-200"
        >
          <RiFacebookCircleFill className="w-[36px] h-[36px]" />
        </Link>
        <Link
          href={"https://www.instagram.com/ScalyxToken"}
          target="_blank"
          className="hover:scale-125 transition duration-200"
        >
          <RiInstagramFill className="w-[36px] h-[36px]" />
        </Link>
        <Link
          href={"https://t.me/Scalyx1"}
          target="_blank"
          className="hover:scale-125 transition duration-200"
        >
          <FaTelegram className="w-[36px] h-[36px]" />
        </Link>
      </div>
      <h2 className="mt-1 text-sm">
        Or contact us by mail:{" "}
        <Link
          href={"mailto:contact@scalyx.io"}
          className="text-blue-500 hover:underline underline-offset-2"
        >
          contact@scalyx.io
        </Link>
      </h2>
    </div>
  );
};
