import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";



type menu = {
    id: number ,
    title: string ,
    href: string
}
function Navbar() {
  const [menus, setMenus] = useState<menu[] | []>([
    { id: 1, title: "HOME", href: "/" },
    { id: 2, title: "GALLERY", href: "/gallery" },
    { id: 3, title: "SHOP", href: "/shop" },
    { id: 4, title: "BLOG", href: "/blog" },
    { id: 5, title: "PAGES", href: "/" },
    { id: 6, title: "CONTACT US", href: "/contact" },
  ]);

  return (
    <nav className="Navbar container mt-6 flex items-center justify-between">
      <ul className="navbar-list text-[14px] flex items-center gap-x-12">
        {menus.map((menu) => (
          <li
            className="navbar-item relative before:transition-all font-bold
         hover:before:w-full before:-top-[28px]  before:absolute before:w-0 before:h-[8px] before:bg-primary"
          >
            <Link className="navbar-link" href={menu.href}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="navbar-basket flex items-center gap-x-3 text-[1.5rem] ">
         <IoSearchOutline className="cursor-pointer"/>
         <FaShoppingCart className="cursor-pointer"/>
      </div>
    </nav>
  );
}

export default Navbar;
