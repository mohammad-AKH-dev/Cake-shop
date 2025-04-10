import BlogComment from "@/components/modules/blog/BlogComment";
import BlogBox from "@/components/modules/blogs/BlogBox";
import ContactInput from "@/components/modules/contact/ContactInput";
import PageHeader from "@/components/modules/PageHeader";
import CategoryInput from "@/components/modules/shop/CategoryInput";
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

function SingleBlogPage() {
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
  console.log(router.query.name);
  return (
    <div className="single-blog__Page">
      <PageHeader title="blog post" paths={["blog", `${router.query.name}`]} />
      <div className="container single-blog__content">
        <div className="single-blog__left-section">
          <div className="single-blog__date">
            <span className="uppercase bg-primary inline-block text-[14px] px-1 text-white">
              news
            </span>
            <span className="text-[14px] text-[#e1e1e1]">|</span>
            <span className="text-text text-[15px]">August 9, 2023</span>
          </div>
          <h1 className="single-blog__title">
            How to Pipe a Fluffy Frosting Border on a Cake
          </h1>
          <div className="single-blog__img-wrapper overflow-hidden">
            <Image
              src={"/images/blogs/blog-1.jpg"}
              width={781}
              height={385}
              alt="single-blog__img"
              className="object-cover transition-all hover:scale-105"
            />
          </div>
          <div className="single-product__descs text-[14px] text-text flex flex-col gap-y-4 pb-10 border-b border-b-[#e1e1e1]">
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
            <h2 className="font-bold text-title text-[24px] leading-7 tracking-wider">
              Ornare aenean euismod elementum nisi. Ut placerat orci nulla
              pellentesque dignissim enim.
            </h2>
            <p>
              Aliquam faucibus purus in massa tempor nec feugiat. Feugiat in
              fermentum posuere urna nec tincidunt praesent semper. Massa sed
              elementum tempus egestas sed sed risus pretium quam. Vitae nunc
              sed velit dignissim sodales ut eu sem. Nisl tincidunt eget nullam
              non nisi est sit. Aliquam vestibulum morbi blandit cursus.
            </p>
          </div>
          <div className="socials-and-news__wrapper flex justify-between items-center">
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
          <div className="related-posts">
            <h4 className="related-posts__title">related posts</h4>
            <div className="related-posts__boxes grid grid-cols-2">
              <BlogBox />
              <BlogBox />
            </div>
          </div>
          <div className="comments-section">
            <h4 className="uppercase text-title font-bold tracking-widest">
              3 comments
            </h4>
            <div className="comments">
              <BlogComment />
            </div>
            <div className="leaving-comment-section">
              <h4 className="leaving-comment__section-title text-title font-bold uppercase">
                leave a comment
              </h4>
              <form
                className="contact-form grid container grid-cols-1  sm:grid-cols-[50%,50%] gap-x-6 gap-y-8 mt-8"
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
                  className="sm:w-[70%] w-fit p-8 sm:p-0 h-[60px] translate-y-4   sm:mx-auto text-white rounded-lg submit-btn bg-hover hover:bg-primary transition-all text-[14px] xl:text-[15px]
        flex items-center justify-center uppercase font-bold tracking-wider"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="single-blog__right-section">
          <div className="blog-author__wrapper">
            <div className="blog-author-image__wrapper">
              <Image
                width={123}
                height={123}
                src={"/images/comments/reply-comment-1.jpg"}
                alt="author"
              />
              <h4 className="blog-author__title">Caroline Lopez</h4>
              <p className="blog-author__infos">
                Quis risus sed vulputate odio ut maecenas.
              </p>
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
                <div className="categories flex flex-col gap-y-4">
                  {categories.map((category) => (
                    <div className="category-input flex items-center justify-between">
                      <div className="category flex items-center gap-x-3">
                        <span className="category-name capitalize">
                          {category.value}
                        </span>
                      </div>
                      <span className="category-count">({category.count})</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="latest-posts__section">
                <h4 className="latest-posts__title">Latest Posts</h4>
                <div className="latest-posts__wrapper">
                  <div className="image-wrapper">
                    <Image
                      width={110}
                      height={106}
                      src={"/images/posts/post-1.jpg"}
                      alt="post"
                    />
                  </div>
                  <div className="post-infos">
                    <p className="post-desc">
                      10 Easiest Ways to Decorate a Cake
                    </p>
                    <span className="post-date">March 15, 2023</span>
                  </div>
                </div>
                <div className="latest-posts__wrapper">
                  <div className="image-wrapper">
                    <Image
                      width={110}
                      height={106}
                      src={"/images/posts/post-1.jpg"}
                      alt="post"
                    />
                  </div>
                  <div className="post-infos">
                    <p className="post-desc">
                      10 Easiest Ways to Decorate a Cake
                    </p>
                    <span className="post-date">March 15, 2023</span>
                  </div>
                </div>
              </div>
              <div className="popular-tags__section">
                <h5 className="popular-tags__section-title">Popular tags</h5>
                <div className="popular-tags">
                  <span>News</span>
                  <span>Blog</span>
                  <span>Baking</span>
                  <span>cakes</span>
                  <span>Tips</span>
                  <span>Recipes</span>
                </div>
              </div>
              <div className="archive-section">
                <h5 className="archive-section__title">
                Archive
                </h5>
                <ul className="archives">
                   <li className="archive"><TbPointFilled/> March 2023</li>
                   <li className="archive"><TbPointFilled/> February 2023</li>
                   <li className="archive"><TbPointFilled/> January 2023</li>
                   <li className="archive"><TbPointFilled/> December 2023</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
