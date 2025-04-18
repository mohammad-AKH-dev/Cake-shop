import BlogBox from "@/components/modules/blogs/BlogBox";
import PageHeader from "@/components/modules/PageHeader";
import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div className="blog-page relative z-[999]">
      <PageHeader title="blog" />
      <div className="container">
        <div className="blogs-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div>
        <div className="pagination flex items-center justify-center mt-12 gap-x-3 flex-wrap">
          {new Array(3).fill(0).map((item, index) => (
            <Link
              className={`py-[5px] px-4 rounded-md ${
                index + 1 === 1 && "bg-primary text-white"
              } hover:bg-primary
               text-title text-[18px] transition-all hover:text-white`}
              href={`/blogs/${index + 1}`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
