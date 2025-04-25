import Image from "next/image";
import Link from "next/link";
import React from "react";

type blogBoxType = {
  id: number;
  title: string;
  path: string;
  desc: string;
};

function BlogBox(props: blogBoxType) {
  const { path, title, desc , id} = props;
  return (
    <div className="blog-box bg-new-products">
      <div className="img-wrapper overflow-hidden">
        <Image
          className="transition-all hover:scale-110 w-full"
          width={370}
          height={239}
          src={path}
          alt={title}
        />
      </div>
      <div className="blog-infos p-6">
        <h6 className="text-[15px] text-text">August 9, 2023</h6>
        <Link
          href={`/blogs/${id}/blog/${title}`}
          className="text-[18px] block hover:text-primary transition-all tracking-widest font-bold mt-4 mb-4"
        >
          {title}
        </Link>
        <p className="text-[15px] text-text">{desc}</p>
      </div>
    </div>
  );
}

export default BlogBox;
