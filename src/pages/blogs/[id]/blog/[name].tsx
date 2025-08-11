import BlogComment from "@/components/modules/blog/BlogComment";
import LatestPost from "@/components/modules/blog/LatestPost";
import BlogBox from "@/components/modules/blogs/BlogBox";
import ContactInput from "@/components/modules/contact/ContactInput";
import PageHeader from "@/components/modules/PageHeader";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { TbPointFilled } from "react-icons/tb";

type IFormInput = {
  firstname: string;
  lastname: string;
  message: string;
};

type blogBoxType = {
  id: number;
  title: string;
  path: string;
  desc: string;
};

type singleBlogPagePropsType = {
  blog: blogBoxType
}

function SingleBlogPage({blog}: singleBlogPagePropsType) {
  const { title , path , desc} = blog
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const submitHandler = (data: IFormInput) => {};
  const [categories, setCategories] = useState([
    {
      value: "all",
      count: 18,
    },
    {
      value: "cakes",
      count: 9,
    },
    {
      value: "puddings",
      count: 5,
    },
    {
      value: "sweets",
      count: 8,
    },
  ]);

  const router = useRouter();
  return (
    <div className="single-blog__Page relative z-[999]">
      <PageHeader title="blog post" paths={["blogs", `${router.query.name}`]}/>
      <div className="container single-blog__content mt-24 flex flex-col lg:flex-row gap-x-16 xl:gap-x-4">
        <div className="single-blog__left-section w-full lg:w-[70%] xl:w-[75%]">
          <div className="single-blog__date flex items-center gap-x-4">
            <span className="uppercase bg-primary inline-block text-[14px] px-1 text-white">
              news
            </span>
            <span className="text-[14px] text-[#e1e1e1]">|</span>
            <span className="text-text text-[15px]">August 9, 2023</span>
          </div>
          <h1
            className="single-blog__title text-[28px] md:text-[36px] lg:text-[30px] xl:text-[36px] mb-8 font-bold max-w-[80%] leading-[3rem] 
          mt-4 tracking-widest"
          >
            {title}
          </h1>
          <div className="single-blog__img-wrapper max-w-[780px] h-[385px] overflow-hidden">
            <Image
              src={path}
              width={781}
              height={385}
              alt="single-blog__img"
              className="object-cover w-full h-full delay-100 duration-300 transition-all hover:scale-105"
            />
          </div>
          <div
            className="single-product__descs text-[14px] 
          text-text flex flex-col gap-y-8 max-w-[800px] leading-[1.5rem] mt-8 pb-10 border-b border-b-[#e1e1e1]"
          >
            <p className="">
              Facilisis mauris sit amet massa. Id faucibus nisl tincidunt eget
              nullam. Mus mauris vitae ultricies leo integer malesuada. Aliquam
              sem fringilla ut morbi tincidunt augue interdum. Sagittis orci a
              scelerisque purus semper eget duis at.
            </p>
            <p>
              Bibendum at varius vel pharetra vel. Vestibulum mattis ullamcorper
              velit sed ullamcorper morbi. Aliquet nec ullamcorper sit amet. Eu
              sem integer vitae justo eget magna fermentum. Vitae ultricies leo
              integer malesuada nunc. Etiam sit amet nisl purus in mollis.
            </p>
            <h2 className="font-bold text-title text-[20px] md:text-[24px] leading-10 tracking-wider">
              {desc}
            </h2>
            <p>
              Aliquam faucibus purus in massa tempor nec feugiat. Feugiat in
              fermentum posuere urna nec tincidunt praesent semper. Massa sed
              elementum tempus egestas sed sed risus pretium quam. Vitae nunc
              sed velit dignissim sodales ut eu sem. Nisl tincidunt eget nullam
              non nisi est sit. Aliquam vestibulum morbi blandit cursus.
            </p>
          </div>
          <div className="socials-and-news__wrapper flex justify-between items-center max-w-[800px]">
            <div className="news uppercase mt-8 tracking-widest flex items-center gap-x-4 text-[#777777] font-bold text-[12px] ">
              <span className="transition-all hover:text-primary cursor-pointer tracking-widest">
                news
              </span>
              <span className="transition-all hover:text-primary cursor-pointer tracking-widest">
                tips
              </span>
              <span className="transition-all hover:text-primary cursor-pointer tracking-widest">
                blog
              </span>
            </div>
            <div className="socials flex items-center gap-x-4 mt-6">
              <FaFacebookF className="hover:text-primary transition-all cursor-pointer  text-[16px]" />
              <FaTwitter className="hover:text-primary transition-all  cursor-pointer text-[18px]" />
              <AiFillInstagram className="hover:text-primary transition-all  cursor-pointer text-[18px]" />
              <FaGooglePlusG className="hover:text-primary transition-all cursor-pointer  text-[24px]" />
            </div>
          </div>
          <div className="related-posts mt-16 max-w-[800px]">
            <h4 className="related-posts__title uppercase tracking-widest 
          text-title text-[16px] mt-10 font-bold mb-10">related posts</h4>
            <div className="related-posts__boxes grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-10">
              <BlogBox {...blog} key={blog.id}/>
              <BlogBox {...blog} key={blog.id}/>
            </div>
          </div>
          <div className="comments-section max-w-[800px] mt-24">
            <h4 className="uppercase text-[16px] text-title font-bold tracking-widest">
              3 comments
            </h4>
            <div className="comments mt-8">
              <BlogComment />
            </div>
            <div className="leaving-comment-section border-t border-t-[#e1e1e1] mt-12 pt-24">
              <h4 className="leaving-comment__section-title text-[16px] tracking-widest text-title font-bold uppercase">
                leave a comment
              </h4>
              <form
                className="contact-form grid container grid-cols-1 -translate-x-3 xl:-translate-x-7 sm:grid-cols-[50%,50%] gap-x-6 gap-y-8 mt-8"
                onSubmit={handleSubmit(submitHandler)}
              >
                <ContactInput
                  error={errors.firstname?.message}
                  placeholder="first name"
                  register={{
                    ...register("firstname", {
                      required: "The text field is required.",
                    }),
                  }}
                  type="text"
                />
                <ContactInput
                  error={errors.lastname?.message}
                  placeholder="last name"
                  register={{
                    ...register("lastname", {
                      required: "The text field is required.",
                    }),
                  }}
                  type="text"
                />
                <div className="p-2 pl-0  relative mt-4 border-b border-b-[#e1e1e1]">
                  <textarea
                    placeholder="Message"
                    {...register("message", {
                      required: "The text field is required.",
                    })}
                    className="capitalize 
         outline-none tracking-widest w-full h-[30px] text-[16px] placeholder:text-[#151515]"
                  ></textarea>
                  {errors.message?.message && (
                    <span
                      className="error absolute  bottom-0 right-0 text-red-600 border-b
         border-b-red-600 block w-full text-right text-[9px]"
                    >
                      {errors.message?.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="sm:w-[70%]  p-8 sm:p-0 h-[60px] translate-y-4   sm:mx-auto text-white rounded-lg submit-btn bg-hover hover:bg-primary transition-all text-[14px] xl:text-[15px]
        flex items-center justify-center mx-auto w-[60%] uppercase font-bold tracking-wider"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="single-blog__right-section w-full mt-24 lg:mt-0 lg:w-[30%] xl:w-[25%]">
          <div className="blog-author__wrapper 
          group flex items-center border border-[#e1e1e1] py-8 px-4 justify-center flex-col text-center">
            <div className="blog-author-image__wrapper">
              <Image
                width={123}
                height={123}
                src={"/images/comments/reply-comment-1.jpg"}
                alt="author"
                className="rounded-full transition-all delay-100 duration-200 group-hover:shadow-author"
              />
            </div>
            <h4 className="blog-author__title text-[16px] font-bold mt-4 tracking-widest uppercase">
              Caroline Lopez
            </h4>
            <p className="blog-author__infos text-text text-[15px] mt-4 tracking-widest">
              Quis risus sed vulputate odio ut maecenas.
            </p>
          </div>
            <div className="search-input p-4 mt-12 flex items-center justify-between bg-[#f9faf9]">
              <input
                type="text"
                className="placeholder:text-text outline-none border-none bg-transparent text-text w-[90%]"
                placeholder="Search blog..."
              />
              <GoSearch className="text-[20px] cursor-pointer transition-all hover:text-primary" />
            </div>
            <div className="categories-infos hidden lg:block">
              <h4
                className="uppercase tracking-widest border-b border-b-title pb-[14px]
          text-title text-[16px] mt-10 font-bold mb-10"
              >
                categories
              </h4>
              <div className="categories flex flex-col gap-y-4 text-[15px]">
                {categories.map((category) => (
                  <div className="category-input flex items-center justify-between">
                    <div className="category flex items-center gap-x-3 font-bold tracking-wider">
                      <span className="category-name capitalize">
                        {category.value}
                      </span>
                    </div>
                    <span className="category-count text-text">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="latest-posts__section">
              <h4 className="latest-posts__title uppercase tracking-widest border-b border-b-title pb-[14px]
          text-title text-[16px] mt-10 font-bold mb-10">Latest Posts</h4>
             <div className="latest-posts__wrapper flex lg:items-center flex-col gap-y-5">
               <LatestPost/>
               <LatestPost/>
              
             </div>
            </div>
            <div className="popular-tags__section">
              <h5 className="popular-tags__section-title uppercase tracking-widest border-b border-b-title pb-[14px]
          text-title text-[16px] mt-10 font-bold mb-6">Popular tags</h5>
              <div className="popular-tags text-text flex items-center uppercase gap-x-6 flex-wrap tracking-widest font-bold gap-y-3">
                <span>News</span>
                <span>Blog</span>
                <span>Baking</span>
                <span>cakes</span>
                <span>Tips</span>
                <span>Recipes</span>
              </div>
            </div>
            <div className="archive-section">
              <h5 className="archive-section__title uppercase tracking-widest border-b border-b-title pb-[14px]
          text-title text-[16px] mt-10 font-bold mb-6">Archive</h5>
              <ul className="archives text-[16px] flex flex-col gap-y-4">
                <li className="archive flex items-center justify-start">
                  <TbPointFilled className="text-[30px] text-primary pr-2"/> March 2023
                </li>
                <li className="archive flex items-center justify-start">
                  <TbPointFilled className="text-[30px] text-primary pr-2"/> February 2023
                </li>
                <li className="archive flex items-center justify-start">
                  <TbPointFilled className="text-[30px] text-primary pr-2"/> January 2023
                </li>
                <li className="archive flex items-center justify-start">
                  <TbPointFilled className="text-[30px] text-primary pr-2"/> December 2023
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths () {
  const res = await fetch('https://cake-shop-api-yhrn.onrender.com/api/blogs')
  const blogs = await res.json()
  
  const paths = blogs.map((blog:blogBoxType) => ({
    params: { id: blog.id.toString() , name: blog.title },
  }))

  return {
    paths,fallback: false
  }
}

export async function getStaticProps (context: GetStaticPropsContext) {
  const {params} = context
  const res = await fetch(`https://cake-shop-api-yhrn.onrender.com/api/blogs/${params?.id}`)
  const blog = await res.json()

  return {
    props: {
      blog
    }
  }
}

export default SingleBlogPage;
