import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";
import { pathToFileURL } from "url";

type menu = {
  id: number;
  title: string;
  href: string;
  paths?: pathsType[];
};

type pathsType = {
  title: string;
  path: string;
};
function Navbar() {
  const router = useRouter();
  const [menus, setMenus] = useState<menu[] | []>([
    { id: 1, title: "HOME", href: "/" },
    { id: 2, title: "GALLERY", href: "/gallery" },
    { id: 3, title: "SHOP", href: "/shop/1" },
    { id: 4, title: "BLOG", href: "/blogs/1" },
    {
      id: 5,
      title: "PAGES",
      href: "/pages",
      paths: [
        { title: "What We Offer", path: "/offers" },
        { title: "Our Team", path: "/team" },
        { title: "Testimonials", path: "/testimonials" },
        { title: "Pricing List", path: "/pricing" },
      ],
    },
    { id: 6, title: "CONTACT US", href: "/contact" },
  ]);

  return (
    <nav className="Navbar container mt-6 hidden lg:flex items-center justify-between">
      <ul className="navbar-list text-[14px] flex items-center gap-x-10">
        {menus.map((menu) =>
          !menu.paths ? (
            <li
              className={`navbar-item relative before:transition-all font-bold
         hover:before:w-full before:-top-[28px] ${
           router.pathname === menu.href && "before:w-full"
         }  
         before:absolute before:w-0 before:h-[8px] before:bg-primary`}
            >
              <Link className="navbar-link p-2" href={menu.href}>
                {menu.title}
              </Link>
            </li>
          ) : (
            <>
              <li
                className={`navbar-item relative group before:transition-all font-bold
         hover:before:w-full before:-top-[28px] ${
           router.pathname === menu.href && "before:w-full"
         }  
         before:absolute before:w-0 before:h-[8px] before:bg-primary`}
              >
                <span className="navbar-link cursor-pointer p-2">
                  {menu.title}
                </span>
                <ul className="link-list -z-[999] group-hover:z-[999] bottom-22 -left-6
                 group-hover:opacity-100 group-hover:visible
                 invisible opacity-0 scale-0 group-hover:scale-100 
                  transition-all duration-500 w-[250px] p-8 pl-10 font-normal pt-12 bg-white absolute flex flex-col gap-y-8">
                  {
                    menu.paths.map(route => (
                      <li className={`text-[14px] ${router.pathname === route.path && 'text-primary'} 
                      uppercase tracking-widest transition-all hover:text-primary`}>
                        <Link href={route.path}>{route.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              </li>
            </>
          )
        )}
      </ul>
      <div className="navbar-basket flex items-center gap-x-3 text-[1.5rem] ">
        <IoSearchOutline className="cursor-pointer" />
        <FaShoppingCart className="cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;
