import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { IoMenuSharp, IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { MenusContext } from "@/contexts/MenuContext";
import { IoMdClose } from "react-icons/io";
import { basketContext } from "@/contexts/BasketContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { toast } from 'react-hot-toast';
import BasketCart from "../templates/navbar/BasketCart";

const MySwal = withReactContent(Swal)

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

function Topbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const menuContext = useContext(MenusContext);
   const basketItems = useContext(basketContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isShowBasket, setIsShowBasket] = useState(false);

  useEffect(() => {
    const scrollBar = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", scrollBar);

    return () => removeEventListener("scroll", scrollBar);
  }, []);

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
    <div
      className={`Topbar sticky z-[9999] transition-all lg:static top-0 bg-white  ${
        scrollTop >= 40 ? "pt-6" : "pt-0"
      }
    right-0 left-0  lg:pt-0 pb-6 px-6 lg:px-0 border-b border-text `}
    >
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
          {!menuContext?.isShowMenu ? (
            <IoMenuSharp
              className="text-[36px] lg:hidden cursor-pointer"
              onClick={() =>
                menuContext?.setShowMenu(true)
              }
            />
          ) : (
            <IoMdClose
              className="text-[36px] lg:hidden cursor-pointer"
              onClick={() =>
                menuContext?.setShowMenu(false)
              }
            />
          )}
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
          <div className="navbar-cart__wrapper relative">
          <FaShoppingCart className="cursor-pointer" onClick={() => setIsShowBasket(prevState => !prevState)}/>
          {isShowBasket && (
            <div
              className="items-cart bg-white w-[300px] sm:w-[400px] p-4 tracking-wider h-[300px] 
          drop-shadow-xl top-10 absolute overflow-y-auto  overflow-x-hidden -right-[4.8rem] sm:right-0 rounded-sm border-b border-b-[#e1e1e1]"
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
                className={`basket-footer flex flex-col gap-y-4 items-center 
            gap-x-5 justify-between text-[14px] font-bold ${
              !basketItems?.basket.length ? " left-0 right-0 px-4" : "mt-6"
            } bottom-5  w-full`}
              >
                <Link
                  href={"/cart"}
                  className="text-title w-full text-center border-2 rounded-md hover:bg-hover transition-all hover:text-white
                hover:border-[#8c2f55] border-[#151515] p-4 py-4 px-6 uppercase"
                >
                  go to cart
                </Link>
                <div
                  onClick={calculateBasket}
                  className="text-white w-full text-center bg-primary  rounded-md hover:bg-hover transition-all hover:text-white
                hover:border-[#8c2f55] cursor-pointer p-4 py-4 px-7 uppercase"
                >
                  checkout
                </div>
              </div>
            </div>
          )}
        </div>
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
