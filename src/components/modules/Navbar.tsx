import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";
import { MenusContext } from "@/contexts/MenuContext";
import BasketCart from "../templates/navbar/BasketCart";
import { basketContext } from "@/contexts/BasketContext";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { toast } from 'react-hot-toast';

const MySwal = withReactContent(Swal)

type menu = {
  id: number;
  title: string;
  href: string;
  paths?: pathsType[];
  href2?: string;
};

type productBoxType = {
  id: number;
  title: string;
  discount?: string;
  price: string;
  score: number;
  count: number;
  category: "cakes" | "puddings" | "Sweets";
  sources: string[];
};

type pathsType = {
  title: string;
  path: string;
};
function Navbar() {
  const router = useRouter();
  const menusContext = useContext(MenusContext);
  const basketItems = useContext(basketContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isShowBasket, setIsShowBasket] = useState(false);

  useEffect(() => {
    const totalPriceItems = basketItems?.basket?.reduce((sum, item) => {
      return sum + Number(item.price) * item.count;
    }, 0);
    setTotalPrice(totalPriceItems!);
  }, [basketItems?.basket]);


  const plusItemCount = (id: number) => {
    const mainItem = basketItems?.basket.find((item) => item.id === id);
    basketItems?.setBasket((prevState) =>
      prevState.map((item) => {
        if (item.id === mainItem?.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
  };

  const minusItemCount = (id: number) => {
    const mainItem = basketItems?.basket.find((item) => item.id === id);
    basketItems?.setBasket((prevState) =>
      prevState.map((item) => {
        if (item.id === mainItem?.id) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          }
        }
        return item;
      })
    );
  };
  
  const calculateBasket = () => {
    MySwal.fire({
      title: 'Final purchase !',
      text: 'Are you sure about the settlement?',
      icon: 'info',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showCancelButton: true
    }).then(result => {
      if(result.isConfirmed) {
        basketItems?.setBasket([]);
        localStorage.clear();
        toast.success('Purchase completed successfully.',{
          duration: 3000,
          
        })
      }
    })
  }

  const removeItemFromBasket = (id: number) => {
    MySwal.fire({
      title: 'Delete',
      icon: 'warning',
      text: 'Are you sure you want to delete this product?',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showCancelButton: true
    }).then(result => {
      if(result.isConfirmed) {
        basketItems?.setBasket((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
        toast.success('Product successfully deleted.',{
          duration: 3000,
        })
      }
    })
  };

  return (
    <nav className="Navbar p-4 py-6 px-6 z-[9999] sticky top-0 left-0 right-0 bg-white mt-6 hidden lg:flex items-center justify-between">
      <ul className="navbar-list text-[14px] flex items-center gap-x-10">
        {menusContext?.menu?.map((menu) =>
          !menu.paths ? (
            <li
              key={menu.id}
              className={`navbar-item relative before:transition-all font-bold
         hover:before:w-full before:-top-[28px] ${
           router?.asPath === menu?.href2 && "before:w-full"
         } 
         ${router?.asPath === menu.href && "before:w-full"} ${
                router?.pathname === menu.href && "before:w-full"
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
                key={menu.id}
                className={`navbar-item relative group before:transition-all font-bold
         hover:before:w-full before:-top-[28px] ${
           router.pathname === menu.href && "before:w-full"
         }  
         before:absolute before:w-0 before:h-[8px] before:bg-primary`}
              >
                <span className="navbar-link cursor-pointer p-2">
                  {menu.title}
                </span>
                <ul
                  className="link-list -z-[999] group-hover:z-[999] bottom-22 -left-6
                 group-hover:opacity-100 group-hover:visible
                 invisible opacity-0 scale-0 group-hover:scale-100 
                  transition-all duration-500 w-[250px] p-8 pl-10 font-normal pt-12 bg-white absolute flex flex-col gap-y-8"
                >
                  {menu.paths.map((route) => (
                    <li
                      key={route.path}
                      className={`text-[14px] ${
                        router.pathname === route.path && "text-primary"
                      } 
                      uppercase tracking-widest transition-all hover:text-primary`}
                    >
                      <Link href={route.path}>{route.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            </>
          )
        )}
      </ul>

      <div className="navbar-basket flex items-center gap-x-3 text-[1.5rem] ">
        <IoSearchOutline className="cursor-pointer" />
        <div className="navbar-cart__wrapper relative">
          <FaShoppingCart className="cursor-pointer" onClick={() => setIsShowBasket(prevState => !prevState)}/>
          {isShowBasket && (
            <div
              className="items-cart bg-white w-[400px] p-4 tracking-wider h-[300px] 
          drop-shadow-xl top-10 absolute overflow-y-auto overflow-x-hidden right-0 rounded-sm border-b border-b-[#e1e1e1]"
            >
              <div className="basket__header uppercase font-bold">
                <span className="text-[18px]">in cart:</span>
                <span className="products-count text-[18px]">
                  {" "}
                  {basketItems?.basket.length} products
                </span>
                <div className="total-price__wrapper text-[16px]">
                  <span>total price:</span>
                  <span className="total-price"> ${totalPrice}.00</span>
                </div>
              </div>
              <div className="basket-items flex flex-col gap-y-4 mt-4">
                {basketItems?.basket.length ? (
                  basketItems.basket.map((product: productBoxType) => (
                    <BasketCart
                      plusCount={() => plusItemCount(product.id)}
                      minusCount={() => minusItemCount(product.id)}
                      remove={() => removeItemFromBasket(product.id)}
                      product={product}
                      key={product.id}
                    />
                  ))
                ) : (
                  <>
                    <MdOutlineRemoveShoppingCart className=" font-bold text-[80px] text-center mx-auto" />
                    <span className="text-[14px]  font-bold text-center">
                      You can add new items in your basket what you waiting for?
                    </span>
                    <Link
                      href={"/shop/1"}
                      className="text-center bg-primary transition-all hover:bg-hover w-fit
                 px-9 mx-auto text-[14px] uppercase font-bold text-white py-4 mb-8"
                    >
                      shop
                    </Link>
                  </>
                )}
              </div>
              <div
                className={`basket-footer flex items-center 
            gap-x-5 justify-between text-[14px] font-bold ${
              !basketItems?.basket.length ? " left-0 right-0 px-4" : "mt-6"
            } bottom-5  w-full`}
              >
                <Link
                  href={"/cart"}
                  className="text-title border-2 rounded-md hover:bg-hover transition-all hover:text-white
                hover:border-[#8c2f55] border-[#151515] p-4 py-4 px-6 uppercase"
                >
                  go to cart
                </Link>
                <div
                  onClick={calculateBasket}
                  className="text-white bg-primary  rounded-md hover:bg-hover transition-all hover:text-white
                hover:border-[#8c2f55] cursor-pointer p-4 py-4 px-7 uppercase"
                >
                  checkout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
