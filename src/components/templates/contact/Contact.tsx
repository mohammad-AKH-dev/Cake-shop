import ContactInput from "@/components/modules/contact/ContactInput";
import React from "react";
import { useForm } from "react-hook-form";

type IFormInput = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  phone: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const submitHandler = (data: IFormInput) => {};
  console.log(errors);

  return (
    <div className="contact-content">
      <div className="contact-title__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <h3 className="contact-title text-[36px] font-bold uppercase tracking-wider">
          get in touch
        </h3>
        <p className="contact-paragraph text-text text-[15px] leading-7 xl:min-w-[550px]">
          We are available 24/7 by fax, e-mail or by phone. You can also use our
          quick contact form to ask a question about our products.
        </p>
      </div>
      <form
        className="contact-form grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-8"
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
        <ContactInput
          error={errors.email?.message}
          placeholder="e-mail"
          register={{
            ...register("email", { required: "The email field is required." }),
          }}
          type="email"
        />
        <ContactInput
          error={errors.phone?.message}
          placeholder="phone"
          register={{
            ...register("phone", { required: "Only numbers are required" }),
          }}
          type="text"
        />
        <button
          type="submit"
          className="sm:w-[70%] w-fit p-8 sm:p-0 h-[60px] translate-y-4   sm:mx-auto text-white rounded-lg submit-btn bg-hover hover:bg-primary transition-all text-[14px] xl:text-[16px]
        flex items-center justify-center uppercase font-bold tracking-wider"
        >
          send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
