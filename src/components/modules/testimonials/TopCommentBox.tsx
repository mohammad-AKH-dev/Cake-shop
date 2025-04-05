import Image from "next/image";
import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { GoStar } from "react-icons/go";


function TopCommentBox() {
  return (
    <div className="top-comment__box p-10 shadow-top-comment rounded-xl">
      <p className="comment text-[20px] xl:text-[24px] tracking-[.1rem] leading-[3rem]">
        Cum exsul crescere, omnes plasmatores visum fatalis
      </p>
      <div className="comment-score flex items-center mt-4 mb-9 gap-x-2 text-[20px] text-yellow-400">
        <GiRoundStar/>
        <GiRoundStar/>
        <GiRoundStar/>
        <GiRoundStar/>
        <GiRoundStar/>
      </div>
      <div className="comment-author flex items-center gap-x-4">
        <Image width={62} height={62} src={'/images/comments/user-4.jpg'} alt="user" className="rounded-full"/>
        <span className="author-name text-primary uppercase text-[15px]  font-bold tracking-widest">Lisa Smith</span>
      </div>
    </div>
  );
}

export default TopCommentBox;
