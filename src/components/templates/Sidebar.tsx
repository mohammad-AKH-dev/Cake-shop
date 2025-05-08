import { MenuContextProvider, MenusContext } from "@/contexts/MenuContext";
import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";

function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const [isShowSelectedMenu, setIsShowSelectedMenu] = useState<boolean>(false);
  const MenuContext = useContext(MenusContext);

  return (
    <div
      className={`sidebar-wrapper backdrop-blur-sm w-full ${MenuContext?.isShowMenu ? 'z-[9999]' : '-z-[9999]'} fixed lg:hidden
       transition-all top-0 delay-100 mt-[5.3rem] sm:mt-[6rem] h-screen`}
    >
      <ul
        className={`sidebar-list font-bold relative top-0 tracking-widest h-full ${
          MenuContext?.isShowMenu ? "left-0" : "-left-[50rem]"
        } transition-all delay-75 bg-white gap-y-3 w-[250px]`}
      >
        {MenuContext?.menu?.map((menu, index) => (
          <li key={index}
            className={`sidebar-list__item px-[3.5rem] 
           h-[40px] my-auto flex ${
             index === 0 && "pt-6 pb-5 mt-0"
           } mt-4 items-center relative transition-all group hover:bg-primary hover:text-white w-full`}
          >
            {menu.paths ? (
              <div className="flex flex-col w-full" key={menu.id}>
                <div className="paths-title flex w-full  justify-between items-center">
                  {menu.title} 
                  
                  <MdKeyboardArrowDown
                    onClick={() => {
                      setSelectedMenu(menu.title);
                      setIsShowSelectedMenu((prevState) => !prevState);
                    }}
                    className={`text-[24px] -mr-7 cursor-pointer transition-all ${
                      selectedMenu && isShowSelectedMenu
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  />
                </div>
                <ul
                  className={`paths-list mt-4 text-title absolute top-6 w-[240x] 
                z-[9999] group-hover:text-title transition-all bg-white p-4 ${
                  selectedMenu === menu.title && isShowSelectedMenu
                    ? "h-fit opacity-100 visible"
                    : "h-0 opacity-0 invisible"
                } flex flex-col gap-y-5 px-6`}
                >
                  {menu.paths.map((menu) => (
                    <li className="path-item" key={menu.path}>
                      <Link className="path-link" href={menu.path}>
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link className="sidebar-list__link" href={menu.href} key={menu.id}>
                {menu.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
