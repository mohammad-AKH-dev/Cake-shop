import BlogBox from "@/components/modules/blogs/BlogBox";
import PageHeader from "@/components/modules/PageHeader";
import Pagination from "@/components/modules/Pagination";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type blogBoxType = {
  id: number;
  title: string;
  path: string;
  desc: string;
};

type blogsPagePropsType = {
  blogs: blogBoxType[];
};

function Blog({ blogs }: blogsPagePropsType) {
  const router = useRouter();
  const currentPage = Number(router.query.id)
  const blogsPerPage = 6
  let endIndex = currentPage * blogsPerPage
  let startIndex = endIndex - blogsPerPage

  useEffect(() => {
    endIndex = currentPage * blogsPerPage
    startIndex = endIndex - blogsPerPage
  },[router.query.id])
  return (
    <div className="blog-page relative z-[999]">
      <PageHeader title="blog" customPath="/blogs/1" />
      <div className="container">
        <div className="blogs-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blogs.length ? blogs.slice(startIndex,endIndex).map((blog) => <BlogBox {...blog} key={blog.id}/>) : null}
        </div>
        
          <Pagination href="blogs" length={blogs.length} postsPerPage={blogsPerPage} currentPage={Number(router.query.id)}/>
=
      </div>
    </div>
  );
}

export async function getStaticPaths () {
  const res = await fetch('https://cake-shop-api-yhrn.onrender.com/api/blogs')
  const blogs = await res.json()

  const paths = blogs.slice(0,blogs.length / 6).map((blog: blogBoxType) => ({
    params: { id: blog.id.toString() },
  }))
  
  return {
    paths,fallback: false
  }
}

export async function getStaticProps() {
  const res = await fetch("https://cake-shop-api-yhrn.onrender.com/api/blogs");
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
