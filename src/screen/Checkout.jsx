import React, { useEffect, useState } from "react";
import { useProducts } from "../context/products/products";
import { getTotalPrice } from "../context/proreducer/reducer";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  const { decrease, increase } = useProducts();
  return (
    <div className="md:m-6  md:flex">
      <div className="md:w-2/3 p-10 md:h-screen md:overflow-auto ">
        <h1 className="text-2xl mb-10">Bag</h1>

        {cart &&
          cart?.map((item) => {
            return (
              <div key={item._id} className="  md:flex mb-6  gap-5">
                <div className="md:w-1/3">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.titel}
                  />
                </div>
                <div className=" md:flex justify-between w-2/3">
                  <div>
                    <p>{item.cate}</p>
                    <p className="text-2xl my-4">{item.titel}</p>
                    <p>{item.desc.slice(0, 70)}</p>
                    <p className=" text-xl text-red-800"> $ {item.price}</p>
                  </div>

                  <div className="flex justify-between items-center md:flex-col px-10 py-6">
                    <span>remove</span>
                    <div className="cart">
                      <button onClick={() => increase()}>+</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => decrease()}>-</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className=" md:w-1/3 p-10 bg-slate-900 text-white ">
        <h1 className="mb-10">Summary</h1>
        <div className="flex flex-col ">
          <div>
            <div className="flex justify-between item-center">
              <h1>Subtotal</h1>
              <p>$800</p>
            </div>
            <div className="flex justify-between my-6 item-center">
              <h1>Shiping</h1>
              <p>$80</p>
            </div>
            <div className="flex justify-between item-center">
              <h1>Text</h1>
              <p>$10</p>
            </div>
          </div>
          <div>
            <div className="flex mt-24 justify-between items-center">
              <h1>Total</h1>
              <span>
                {" "}
                <p>Total price: {getTotalPrice(cart)}</p>
              </span>
            </div>
            <button className="p-2 text-2xl w-full rounded-md mt-5 bg-green-800 text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
