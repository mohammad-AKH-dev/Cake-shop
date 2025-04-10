import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogBox() {
  return (
    <div className="blog-box bg-new-products">
      <div className="img-wrapper overflow-hidden">
        <Image
          className="transition-all hover:scale-110 w-full"
          width={370}
          height={239}
          src={`/images/blogs/blog-1.jpg`}
          alt="blog"
        />
      </div>
      <div className="blog-infos p-6">
        <h6 className="text-[15px] text-text">August 9, 2023</h6>
        <Link href={'/blogs/2'} className="text-[18px] block hover:text-primary transition-all tracking-widest font-bold mt-4 mb-4">How to Pipe a Fluffy Frosting Border on a Cake</Link>
        <p className="text-[15px] text-text">
          Est velox nuptia, cesaris. Est dexter turpis, cesaris. Cum nixus
          persuadere, omnes fluctuies promissio flavum
        </p>
      </div>
    </div>
  );
}

export default BlogBox;
