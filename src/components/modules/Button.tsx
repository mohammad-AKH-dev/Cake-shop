import Link from "next/link";
import React from "react";

type ButtonPropsType = {
    title: string 
    href: string
}

function Button(props : ButtonPropsType) {

  const { title , href} = props

  return (
    <Link
      href={href}
      className="uppercase py-6  rounded-md before:rounded-md mt-8 before:w-full before:h-full
    before:absolute before:inset-0 relative px-12 md:px-16 top-16 text-[14px] font-bold tracking-wider before:scale-100 hover:before:scale-0 before:bg-primary bg-hover transition-all 
    before:transition-all text-white shadow-box"
    >
      <span className="relative z-50">{title}</span>
    </Link>
  );
}

export default Button;
