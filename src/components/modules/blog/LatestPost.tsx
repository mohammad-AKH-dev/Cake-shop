import Image from "next/image";
import React from "react";

function LatestPost() {
  return (
    <div className="latest-post__wrapper text-left flex items-center gap-x-6 lg:gap-x-0 lg:grid grid-cols-2">
      <div className="image-wrapper overflow-hidden">
        <Image
          width={110}
          height={106}
          src={"/images/posts/post-1.jpg"}
          alt="post"
          className="transition-all hover:scale-105 w-full h-full lg:w-fit"
        />
      </div>
      <div className="post-infos text-[15px]  ">
        <p className="post-desc">10 Easiest Ways to Decorate a Cake</p>
        <span className="post-date text-primary">March 15, 2023</span>
      </div>
    </div>
  );
}

export default LatestPost;
