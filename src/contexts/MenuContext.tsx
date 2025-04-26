import { useRouter } from "next/router";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from "react"

type pathsType = {
    title: string;
    path: string;
};

type menu = {
    id: number;
    title: string;
    href: string;
    paths?: pathsType[];
    href2?: string;
};

type menuContextTypes = {
    menu: menu[] | null
    setMenu:Dispatch<SetStateAction<menu[] | null>> | null
    isShowMenu: boolean
    setShowMenu: Dispatch<SetStateAction<boolean>>
}

export const MenusContext = createContext<menuContextTypes | null>(null)


export const MenuContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const router = useRouter()
    const [isShowMenu,setIsShowMenu] = useState<boolean>(false)

   
    const [menus,setMenus] = useState<menu[] | null>([
        { id: 1, title: "HOME", href: "/" },
        { id: 2, title: "GALLERY", href: "/gallery" },
        {
          id: 3,
          title: "SHOP",
          href: `/shop/${
            router.query.id ? Number(router.query.id) > 3 ? "1" : router.query.id : '1'
          }`,
          href2: `/product/${router?.query?.product}`,
        },
        {
          id: 4,
          title: "BLOG",
          href: `/blogs/${
            router.query.id ? Number(router.query.id) > 3 ? "1" : router.query.id : '1'
          }`,
          href2: `/blogs/1/blog/${router?.query?.name}`,
        },
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
      ])
    
    return (
        <MenusContext.Provider value={{menu: menus , setMenu: setMenus , isShowMenu , setShowMenu: setIsShowMenu}}>
          {
            children
          }
        </MenusContext.Provider>
    )
}