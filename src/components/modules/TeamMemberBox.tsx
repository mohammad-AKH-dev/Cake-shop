import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";


type teamMemberBoxPropsType = {
    id:number
    image: string
    name: string
    desc: string
}



function TeamMemberBox(props: teamMemberBoxPropsType) {

    const {image , name , desc} = props


  return (
    <div className="member-box group">
      <div className="image-wrapper cursor-pointer max-w-[280px] mx-auto border-[15px] border-[#fff] rounded-full overflow-hidden 
       ">
        <Image
          src={image}
          className="rounded-full group-hover:scale-110  transition-all"
          width={250}
          height={250}
          alt="member"
        />
      </div>
      <div className="member-infos text-center mt-4 group-hover:translate-y-5 transition-all">
        <h3 className="member-infos__title uppercase text-title tracking-[.2rem] transition-all
         cursor-pointer hover:text-primary font-bold text-[24px]">{name}</h3>
        <p className="member-infos__desc text-[15px] text-text mx-auto mt-4 max-w-[320px]">
          {desc}
        </p>
        <div className="member-socials flex items-center mt-8 justify-center gap-x-4 text-[20px]">
           <FaFacebookF className="transition-all hover:text-primary cursor-pointer"/>
           <FaTwitter className="transition-all hover:text-primary cursor-pointer"/>
           <FaInstagram className="transition-all hover:text-primary cursor-pointer"/>
           <IoLogoGoogleplus className="text-[24px] transition-all hover:text-primary cursor-pointer"/>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberBox;
