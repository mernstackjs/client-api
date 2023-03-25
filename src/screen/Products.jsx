import React from "react";
import { useProducts } from "../context/products/products";

const Products = () => {
  const { state, addcart } = useProducts();
  const { isLoading, products, total } = state;

  const addProduct = (item) => {
    addcart(item);
    console.log(total);
  };
  return (
    <div className="md:p-3  h-screen overflow-auto">
      <div className="w-full h-72 mb-6 bg-slate-500">jh</div>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3">
        {!isLoading &&
          products.data.products?.map((product) => {
            return (
              <div key={product._id} className="bg-slate-100 p-3 shadow-lg">
                <img
                  className="w-full h-52 object-cover"
                  src={product.image}
                  alt="halo"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h2>{product.titel}</h2>
                    <span>{product.price}$</span>
                  </div>
                  <p className="mt-5">{product.desc.slice(0, 80)}</p>
                  <button
                    onClick={() => addProduct(product)}
                    className="p-3 mt-3 bg-slate-900 text-white w-full"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
