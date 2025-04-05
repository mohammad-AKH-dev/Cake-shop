import MainTestimonial from "@/components/modules/testimonials/MainTestimonial";
import React from "react";
import CommentsSlider from "./CommentsSlider";
import TopCommentBox from "@/components/modules/testimonials/TopCommentBox";

function Testimonials() {
  return (
    <div className="testimonials-wrapper mt-36">
        <span className="text-title text-[40px] flex items-center justify-center container pb-4">#1</span>
      <div className="comments container grid grid-cols-1 gap-y-12 md:gap-y-0 md:grid-cols-2 gap-x-12">
        <MainTestimonial
          desc="Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. 
        Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Mauris a diam maecenas sed enim ut sem viverra aliquet."
          image="/images/comments/user-3.jpg"
          name="James Peterson"
          id={1}
          role="client"
        />
        <MainTestimonial
          desc="Lectus proin nibh nisl condimentum id venenatis a condimentum. Sed id semper risus in hendrerit. 
          Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices libero id faucibus."
          image="/images/comments/user-4.jpg"
          name="Ann McMillan"
          id={2}
          role="client"
        />
      </div>
      <CommentsSlider/>
      <div className="top-comments pt-24 container pb-12">
        <span className="text-title text-[40px] flex items-center justify-center container">#3</span>
        <div className="top-comments__wrapper mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-12 lg:grid-cols-3 gap-x-8">
           <TopCommentBox/>
           <TopCommentBox/>
           <TopCommentBox/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
