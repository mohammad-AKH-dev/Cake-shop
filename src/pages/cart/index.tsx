import PageHeader from "@/components/modules/PageHeader";
import Cart from "@/components/templates/cart/Cart";
import React from "react";

function index() {
  return (
    <div className="cart-page relative z-[999]">
      <PageHeader title="cart page" paths={['shop','cart page']} mainPath="cart page" />
      <div className="container">
        <Cart />
      </div>
    </div>
  );
}

export default index;
