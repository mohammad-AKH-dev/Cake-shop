import PageHeader from "@/components/modules/PageHeader";
import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { basketContext } from "@/contexts/BasketContext";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast } from "react-hot-toast";
import { TbBasketOff } from "react-icons/tb";
import Button from "@/components/modules/Button";

const MySwal = withReactContent(Swal);

function Cart() {
  const basket = useContext(basketContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const totalPriceItems = basket?.basket?.reduce((sum, item) => {
      return sum + Number(item.price) * item.count;
    }, 0);
    setTotalPrice(totalPriceItems!);
  }, [basket?.basket]);

  const plusItemCount = (id: number) => {
    const mainItem = basket?.basket.find((item) => item.id === id);
    basket?.setBasket((prevState) =>
      prevState.map((item) => {
        if (item.id === mainItem?.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      })
    );
  };
  const minusItemCount = (id: number) => {
    const mainItem = basket?.basket.find((item) => item.id === id);
    basket?.setBasket((prevState) =>
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

  const removeItemFromBasket = (id: number) => {
    MySwal.fire({
      title: "Delete",
      icon: "warning",
      text: "Are you sure you want to delete this product?",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        basket?.setBasket((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
        toast.success("Product successfully deleted.", {
          duration: 3000,
        });
      }
    });
  };

  const calculateBasket = () => {
    MySwal.fire({
      title: "Final purchase !",
      text: "Are you sure about the settlement?",
      icon: "info",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        basket?.setBasket([]);
        localStorage.clear();
        toast.success("Purchase completed successfully.", {
          duration: 3000,
        });
      }
    });
  };

  return (
    <section className="cart-section">
      {basket?.basket.length ? (
        <Table className="mt-16">
          <TableCaption>
            <div className="caption-wrapper flex items-center justify-between container mt-12">
              <div className="table-caption__left-section flex items-center gap-x-4">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="p-4 border text-title border-[#e1e1e1] rounded-sm outline-none placeholder:text-title placeholder:text-[16px]"
                />
                <button
                  className="px-16 text-[18px] text-white uppercase
             font-bold tracking-widest py-6 rounded-md bg-primary hover:bg-hover transition-all"
                  type="button"
                >
                  apply
                </button>
              </div>
              <div className="table-caption__right-section flex items-center gap-x-8">
                <div className="total-price__wrapper flex items-center gap-x-4">
                  <span className="text-text text-[18px] capitalize font-bold">
                    total
                  </span>
                  <span className="font-bold text-[32px] text-title">
                    ${totalPrice}.00
                  </span>
                </div>
                <button
                  onClick={() => calculateBasket()}
                  className="px-8 text-[18px] text-white uppercase
             font-bold tracking-widest py-6 rounded-md bg-primary hover:bg-hover transition-all"
                  type="button"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className=" uppercase whitespace-nowrap text-[20px]">
                Product name
              </TableHead>
              <TableHead className="text-[20px] uppercase ">Price</TableHead>
              <TableHead className="text-[20px] uppercase ">
                Quantity{" "}
              </TableHead>
              <TableHead className="uppercase text-[20px]">Total</TableHead>
              <TableHead className="text-[20px] uppercase">remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {basket.basket.map((item) => (
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-x-6">
                    <Image
                      className="max-w-[100px] bg-new-products"
                      width={300}
                      height={300}
                      src={item.sources[0]}
                      alt={item.title}
                    />
                    <h4 className="uppercase font-bold text-[24px]">
                      {item.title}
                    </h4>
                  </div>
                </TableCell>
                <TableCell className="text-[24px]">${item.price}</TableCell>
                <TableCell className="text-[24px]">
                  <div className="product-count__wrapper flex items-center mt-2 gap-x-5">
                    <FaMinus
                      className="border border-[#e1e1e1] text-[35px] rounded-md transition-all hover:border-primary 
                                 hover:text-primary cursor-pointer p-2"
                      onClick={() => minusItemCount(item.id)}
                    />
                    <span className="count">{item.count}</span>
                    <FaPlus
                      className="border border-[#e1e1e1] text-[35px] rounded-md transition-all hover:border-primary 
                                 hover:text-primary cursor-pointer p-2"
                      onClick={() => plusItemCount(item.id)}
                    />
                  </div>
                </TableCell>
                <TableCell className="text-[24px]">
                  ${+item.price * item.count}.00
                </TableCell>
                <TableCell className="text-[14px]">
                  <button
                    onClick={() => removeItemFromBasket(item.id)}
                    type="button"
                    className="bg-primary px-4 py-3 uppercase rounded-md transition-all hover:bg-hover text-white"
                  >
                    remove
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-[140px]  flex items-center flex-col text-center justify-center mt-12">
          <TbBasketOff />
          <p className="text-[20px] -mb-12 mt-4 max-w-[600px] tracking-widest leading-8 font-bold">
            "Your cart is waiting to be filled! Start browsing and discover
            something awesome. 💖"
          </p>
          <Button href="/shop/1" title="shop" />
        </div>
      )}
    </section>
  );
}

export default Cart;
