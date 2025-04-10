import Image from "next/image";
import React from "react";

function BlogComment() {
  return (
    <div className="comment-wrapper">
      <div className="comment">
        <Image
          width={119}
          className="comment-image"
          height={119}
          src={"/images/comments/user-comment-1.jpg"}
          alt="user"
        />
        <div>
          <div className="comment-infos">
            <div className="comment-author">
              <h5 className="author">Jane Doe</h5>
              <span>|</span>
              <span className="reply uppercase text-primary transition-all hover:text-title">
                reply
              </span>
            </div>
            <div className="comment-date">
              <span>Aug 30, 2023</span>
            </div>
          </div>
          <div className="comment-desc">
            Facilisis mauris sit amet massa. Id faucibus nisl tincidunt eget
            nullam. Mus mauris vitae ultricies leo integer malesuada. Aliquam
            sem fringilla ut morbi tincidunt augue interdum. Sagittis orci a
            scelerisque purus semper eget duis at.
          </div>
        </div>
      </div>
      <div className="comment-reply">
        <Image
          width={119}
          className="replay-image"
          height={119}
          src={"/images/comments/reply-comment-1.jpg"}
          alt="user"
        />
        <div>
          <div className="replay-infos">
            <div className="replay-author">
              <h5 className="author">Jessica Brown</h5>
              <span>|</span>
              <span className="reply uppercase text-primary transition-all hover:text-title">
                reply
              </span>
            </div>
            <div className="replay-date">
              <span>Aug 30, 2023</span>
            </div>
          </div>
          <div className="replay-desc">
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
