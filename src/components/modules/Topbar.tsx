import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMenuSharp, IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { useEffect, useState } from "react";

function Topbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollTop,setScrollTop] = useState<number>(0)

  useEffect(() => {
     const scrollBar = () => {
        setScrollTop(window.scrollY) 
     }
     window.addEventListener('scroll',scrollBar)

     return () => removeEventListener('scroll',scrollBar)
  }, []);

  return (
    <div className={`Topbar sticky z-[9999] transition-all lg:static top-0 bg-white  ${scrollTop >= 40 ? 'pt-6' : 'pt-0'}
    right-0 left-0  lg:pt-0 pb-6 px-6 lg:px-0 border-b border-text `}>
      <div className="topbar-content px-6 flex relative z-[9999] justify-between items-center">
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
        hover:before:scale-100 hover:before:bg-hover before:scale-0 hover:text-white before:transition-all hover:before:z-50 
        before:delay-100
        cursor-pointer
        rounded-md border-2 border-primary hidden lg:flex items-center gap-x-2"
        >
          <MdEmail className="text-[1.3rem] z-50" />
          <span className="z-[999] font-bold">GET IN TOUCH</span>
        </div>
        <div className="topbar-basket flex lg:hidden items-center gap-x-3 text-[1.5rem] ">
          <IoSearchOutline className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
          <div className="menu-icon__wrapper relative group">
            <FiMoreVertical
              className="cursor-pointer"
              onClick={() => setIsOpen((prevState) => !prevState)}
            />
            <div
              className={`contact-infos absolute p-4 top-[3.8rem] -right-12
              ${
                isOpen
                  ? "opacity-100 z-[999] visible"
                  : "-z-[999] invisible opacity-0"
              } transition-all bg-white w-[300px] `}
            >
              <div className="location flex flex-col gap-y-4 items-center ">
                <div className="flex items-center gap-x-4">
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
                  <span className="z-50 font-bold text-[12px]">
                    GET IN TOUCH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
