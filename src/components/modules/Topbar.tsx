import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Topbar() {
  return (
    <div className="Topbar pb-6 border-b border-text ">
      <div className="topbar-content container flex justify-between items-cente">
        <div className="location flex items-center gap-x-4">
          <FaLocationDot className="text-[2rem]" />
          <Link href="/contact" className="hover:text-primary transition-all">
            523 Sylvan Ave
            <br />
            Mountain View, CA 94041 USA
          </Link>
        </div>
        <Link href={"/"} className="logo-wrapper">
          <img src="/images/logo/desktop-logo.png" alt="logo" />
        </Link>
        <div
          className="get-in-touch__btn py-4 px-10 
       before:bg-transparent relative before:absolute
        before:w-full before:h-full before:scale-0 before:inset-0
        hover:before:scale-100 before:bg-primary before:transition-all hover:text-white hover:before:-z-50 
        before:delay-100
        cursor-pointer
        rounded-md border-2 border-primary flex items-center gap-x-2"
        >
          <MdEmail className="text-[1.3rem] z-50" />
          <span className="z-50">GET IN TOUCH</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
