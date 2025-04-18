import Image from "next/image";
import React from "react";

function BlogComment() {
  return (
    <div className="comment-wrapper">
      <div className="comment flex gap-x-6 items-center">
        <Image
          width={119}
          className="comment-image"
          height={119}
          src={"/images/comments/user-comment-1.jpg"}
          alt="user"
        />
        <div>
          <div className="comment-infos flex items-center justify-between flex-wrap gap-y-3">
            <div className="comment-author flex items-center gap-x-3">
              <h5 className="author text-[17px] tracking-widest font-bold">Jane Doe</h5>
              <span className="text-[#e1e1e1]">|</span>
              <span className="reply cursor-pointer uppercase text-primary transition-all hover:text-title">
                reply
              </span>
            </div>
            <div className="comment-date text-[15px] text-text">
              <span>Aug 30, 2023</span>
            </div>
          </div>
          <div className="comment-desc mt-4 text-[13px] md:text-[15px]">
            Facilisis mauris sit amet massa. Id faucibus nisl tincidunt eget
            nullam. Mus mauris vitae ultricies leo integer malesuada. Aliquam
            sem fringilla ut morbi tincidunt augue interdum. Sagittis orci a
            scelerisque purus semper eget duis at.
          </div>
        </div>
      </div>
      <span className="w-full h-[1px] bg-[#e1e1e1] my-12 block"></span>
      <div className="comment-reply mt-12 ml-3 sm:ml-6 md:ml-20 xl:ml-48 flex gap-x-6 items-center">
        <Image
          width={119}
          className="replay-image"
          height={119}
          src={"/images/comments/reply-comment-1.jpg"}
          alt="user"
        />
        <div>
          <div className="replay-infos flex items-center justify-between flex-wrap gap-y-3">
            <div className="replay-author flex items-center gap-x-3">
              <h5 className="author text-[17px] tracking-widest font-bold">Jessica Brown</h5>
              <span className="text-[#e1e1e1]">|</span>
              <span className="reply cursor-pointer uppercase text-primary transition-all hover:text-title">
                reply
              </span>
            </div>
            <div className="replay-date text-text text-[15px]">
              <span>Aug 30, 2023</span>
            </div>
          </div>
          <div className="replay-desc mt-4 text-[13px] md:text-[15px]">
            Bibendum at varius vel pharetra vel. Vestibulum mattis ullamcorper
            velit sed ullamcorper morbi. Aliquet nec ullamcorper sit amet. Eu
            sem integer vitae justo eget magna fermentum. Vitae ultricies leo
            integer malesuada nunc. Etiam sit amet nisl purus in mollis.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogComment;
