import axios from "axios";
import React, { useState } from "react";

const AddProducts = () => {
  const [products, setProducts] = useState({
    titel: "",
    cate: "",
    desc: "",
    image: "",
    price: "",
  });

  const onChangeProduct = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };

  const onClickProducts = (e) => {
    e.preventDefault();
    const { titel, desc, cate, image, price } = products;
    axios.post("https://login-app-4qga.onrender.com//create-product", {
      titel,
      desc,
      cate,
      image,
      price,
    });
    setProducts({
      titel: "",
      cate: "",
      desc: "",
      image: "",
      price: "",
    });
  };
  return (
    <div className="md:py-10 lg:px-48 md:px-16 p-3 ">
      <div>
        <div className="flex gap-4 mb-3 ">
          <div className="w-full">
            <label htmlFor="titel">Product Titel</label>
            <input
              value={products.titel}
              name="titel"
              onChange={onChangeProduct}
              className="w-full p-2"
              type="text"
              id="titel"
            />
          </div>
          <div className="w-full">
            <label htmlFor="category">Product Category</label>
            <input
              value={products.cate}
              name="cate"
              onChange={onChangeProduct}
              className="w-full p-2"
              type="text"
              id="category"
            />
          </div>
        </div>
        <div className="mb-3">
          <div>
            <label htmlFor="desc">Image</label>
            <input
              value={products.image}
              name="image"
              onChange={onChangeProduct}
              type="text"
              className="w-full p-2"
              id="desc"
            />
          </div>
          <div>
            <label className="w-full" htmlFor="price">
              Price
            </label>
            <input
              className="w-full p-3"
              id="price"
              value={products.price}
              name="price"
              onChange={onChangeProduct}
            />
          </div>
        </div>
        <label>Description</label>
        <textarea
          value={products.desc}
          onChange={onChangeProduct}
          className="w-full p-3"
          name="desc"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          onClick={onClickProducts}
          className="p-2 w-full bg-slate-900 text-white"
        >
          Add Products
        </button>
      </div>
    </div>
  );
};

export default AddProducts;
