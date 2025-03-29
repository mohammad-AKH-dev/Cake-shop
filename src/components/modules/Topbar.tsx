import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMenuSharp, IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

function Topbar() {
  return (
    <div className="Topbar pb-6 px-6 lg:px-0 border-b border-text ">
      <div className="topbar-content lg:container flex justify-between items-cente">
        <div className="location hidden lg:flex items-center gap-x-4">
          <FaLocationDot className="text-[2rem]" />
          <Link href="/contact" className="hover:text-primary transition-all">
            523 Sylvan Ave
            <br />
            Mountain View, CA 94041 USA
          </Link>
        </div>
        <div className="logo-wrapper flex items-center gap-x-3">
          <IoMenuSharp className="text-[36px] lg:hidden cursor-pointer" />
          <Link href={"/"}>
            <img src="/images/logo/desktop-logo.png" alt="logo" />
          </Link>
        </div>
        <div
          className="get-in-touch__btn py-4 px-10 
       before:bg-transparent relative before:absolute
        before:w-full before:h-full before:inset-0 
        hover:before:scale-100 hover:before:bg-hover before:scale-0 before:transition-all hover:text-white hover:before:-z-50 
        before:delay-100
        cursor-pointer
        rounded-md border-2 border-primary hidden lg:flex items-center gap-x-2"
        >
          <MdEmail className="text-[1.3rem] z-50" />
          <span className="z-50 font-bold">GET IN TOUCH</span>
        </div>
        <div className="topbar-basket flex lg:hidden items-center gap-x-3 text-[1.5rem] ">
          <IoSearchOutline className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
          <div className="menu-icon__wrapper relative group">
            <FiMoreVertical className="cursor-pointer" />
            <div className="contact-infos absolute top-[3.8rem] -right-6 
            group-hover:opacity-100 group-hover:visible -z-[999] group-hover:z-[999] transition-all opacity-0 invisible bg-white w-[300px] p-6">
              <div className="location flex items-center gap-x-4 mb-4">
                <FaLocationDot className="text-[2rem] text-primary" />
                <Link
                  href="/contact"
                  className="hover:text-primary leading-7 transition-all text-[14px]"
                >
                  523 Sylvan Ave
                  <br />
                  Mountain View, CA 94041 USA
                </Link>
              </div>
              <div
                className="get-in-touch__btn py-2 px-4 w-[180px] mx-auto justify-center 
                      relative transition-all hover:bg-primary hover:text-white cursor-pointer
                     rounded-md border-2 border-primary flex items-center gap-x-2"
                   >
                <MdEmail className="text-[1.3rem] z-50" />
                <span className="z-50 font-bold text-[12px]">GET IN TOUCH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
