import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaSkype, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGoogleplus } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer mt-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-y-8  xl:grid-cols-3 gap-x-12 ">
        <div className="gallery">
          <div className="section-title uppercase tracking-widest font-bold pb-9 text-[18px] text-title">
            gallery
          </div>
          <div className="gallery grid grid-cols-3 gap-4">
            <Image
              src={"/images/footer/gallery-1.jpg"}
              width={100}
              height={100}
              alt="gallery-img"
              className="w-full 
            transition-all hover:rotate-12 hover:brightness-50 hover:scale-90 cursor-pointer"
            />
            <Image
              src={"/images/footer/gallery-2.jpg"}
              width={100}
              height={100}
              alt="gallery-img"
              className="w-full 
            transition-all hover:rotate-12 hover:brightness-50 hover:scale-90 cursor-pointer"
            />
            <Image
              src={"/images/footer/gallery-3.jpg"}
              width={100}
              height={100}
              alt="gallery-img"
              className="w-full 
            transition-all hover:rotate-12 hover:brightness-50 hover:scale-90 cursor-pointer"
            />
            <Image
              src={"/images/footer/gallery-4.jpg"}
              width={100}
              height={100}
              alt="gallery-img"
              className="w-full 
            transition-all hover:rotate-12 hover:brightness-50 hover:scale-90 cursor-pointer"
            />
            <Image
              src={"/images/footer/gallery-5.jpg"}
              width={100}
              height={100}
              alt="gallery-img"
              className="w-full 
            transition-all hover:rotate-12 hover:brightness-50 hover:scale-90 cursor-pointer"
            />
            <Image
              src={"/images/footer/gallery-6.jpg"}
              width={100}
              height={100}
              alt="gallery-img"
              className="w-full 
            transition-all hover:rotate-12 hover:brightness-50 hover:scale-90 cursor-pointer"
            />
          </div>
        </div>

        <div className="quick-links">
          <div className="section-title uppercase tracking-widest font-bold text-[18px] text-title">
            Quick Links
          </div>

          <ul className="quick-links__list grid grid-cols-2 gap-x-16 mt-6 ml-8 gap-y-5 lg:gap-y-9 xl:gap-y-4">
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                About us
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                What We Offer
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                Our Team
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                Our Blog
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                Shop
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                Testimonials
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                Pricing
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                Baking School
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                FAQ
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                Our Recipes
              </Link>
            </li>
            <li className="quick-link-item">
              <Link
                href={"/"}
                className="text-title capitalize text-[15px] transition-all hover:text-primary 
                before:w-[15px] hover:before:w-[30px] hover:pl-4
                 before:h-[1.5px] before:bg-title before:hover:bg-primary before:transition-all 
                 before:absolute before:-left-7 before:bottom-[9px] before:right-0 relative"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact-ways">
          <div className="section-title uppercase tracking-widest font-bold text-[18px] text-title">
            Get in touch
          </div>
          <div className="location flex gap-x-3  mt-6 ">
            <MdLocationPin className="text-primary text-[18px] mt-1" />
            <p className="text-title transition-all hover:text-primary cursor-pointer text-[15px] tracking-wider max-w-[250px]">
              523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA
            </p>
          </div>
          <div className="location flex gap-x-3  mt-6 ">
            <FaPhoneAlt className="text-primary text-[15px] mt-1" />
            <Link
              href={"tel: +1 844 123 456 78"}
              className="text-title transition-all hover:text-primary cursor-pointer text-[15px] tracking-wider max-w-[250px]"
            >
              +1 (844) 123 456 78
            </Link>
          </div>
          <div className="location flex gap-x-3  mt-6 ">
            <MdEmail className="text-primary text-[18px] mt-1" />
            <Link
              href={"mailto: info@gmail.com"}
              className="text-title transition-all hover:text-primary cursor-pointer text-[15px] tracking-wider max-w-[250px]"
            >
              info@demolink.org
            </Link>
          </div>
          <div className="socials flex items-center gap-x-4 mt-8">
            <div
              className="social w-[38px] h-[38px] border text-icon border-icon rounded-full flex items-center justify-center transition-all hover:text-primary 
            hover:border-primary cursor-pointer"
            >
              <FaFacebookF className="text-[18px]" />
            </div>
            <div
              className="social w-[38px] h-[38px] border text-icon border-icon rounded-full flex items-center justify-center transition-all hover:text-primary 
            hover:border-primary cursor-pointer"
            >
              <FaTwitter className="text-[18px]" />
            </div>
            <div
              className="social w-[38px] h-[38px] border text-icon border-icon rounded-full flex items-center justify-center transition-all hover:text-primary 
            hover:border-primary cursor-pointer"
            >
              <FaInstagram className="text-[18px]" />
            </div>
            <div
              className="social w-[38px] h-[38px] border text-icon border-icon rounded-full flex items-center justify-center transition-all hover:text-primary 
            hover:border-primary cursor-pointer"
            >
              <IoLogoGoogleplus className="text-[18px]" />
            </div>
            <div
              className="social w-[38px] h-[38px] border text-icon border-icon rounded-full flex items-center justify-center transition-all hover:text-primary 
            hover:border-primary cursor-pointer"
            >
              <FaSkype className="text-[18px]" />
            </div>
          </div>
        </div>
      </div>

      <p className="copy-right text-text text-[13px] text-center p-8 mt-24 border-t border-t-[#e1e1e1]">© 2025. Sweet Bakery. All Rights Reserved. Privacy Policy.</p>
    </footer>
  );
}

export default Footer;
