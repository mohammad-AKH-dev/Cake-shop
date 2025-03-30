import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type ContactInputPropsType = {
  placeholder: string;
  register: UseFormRegisterReturn;
  type: string;
  error: string | undefined;
};

function ContactInput(props: ContactInputPropsType) {
  const { placeholder, register, type, error } = props;
  return (
    <div className="input-wrapper h-fit pl-0 p-4 border-b relative border-b-[#e1e1e1]">
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="capitalize w-full autofill:bg-transparent pl-0 p-2 tracking-widest focus:placeholder:-translate-y-4 placeholder:transition-all
          focus:placeholder:text-[10px] outline-none border-none text-[16px] placeholder:text-[#151515]"
      />
      {error && (
        <span
          className="error absolute  bottom-0 right-0 text-red-600 border-b
         border-b-red-600 block w-full text-right text-[9px]"
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default ContactInput;
