import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import Image from "next/image";

type teamMemberBoxPropsType = {
    id:number
    image: string
    teamID: number
    name: string
    desc: string
}

function TeamBox(props:teamMemberBoxPropsType) {
    
    const {image , name , desc, teamID} = props
  return (
    <div className="member-box group">
      <div
        className="image-wrapper cursor-pointer  mx-auto border-[15px] border-[#fff]  overflow-hidden 
           "
      >
        <Image
          src={image}
          className={`${teamID === 2 && 'w-[270px] mx-auto h-[227px]'} group-hover:scale-110 w-[300px] mx-auto sm:w-full object-cover transition-all`}
          width={294}
          height={266}
          alt="member"
        />
      </div>
      <div className="member-infos text-center mt-4 group-hover:translate-y-5 transition-all">
        <h3
          className={`member-infos__title  uppercase text-title tracking-[.2rem] transition-all
             cursor-pointer hover:text-primary font-bold ${teamID === 2 ? 'text-[18px]' : 'text-[24px] sm:text-[15px] md:text-[24px]'}`}
        >
          {name}
        </h3>
        <p className="member-infos__desc text-[15px] sm:text-[13px] md:text-[15px] text-text mt-4 mx-auto max-w-[320px]">
          {desc}
        </p>
        <div className="member-socials flex items-center mt-8 justify-center gap-x-4 text-[20px]">
          <FaFacebookF className="transition-all hover:text-primary cursor-pointer" />
          <FaTwitter className="transition-all hover:text-primary cursor-pointer" />
          <FaInstagram className="transition-all hover:text-primary cursor-pointer" />
          <IoLogoGoogleplus className="text-[24px] transition-all hover:text-primary cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default TeamBox;
