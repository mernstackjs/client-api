import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { Protected } from "./components/Protected";
import Register from "./components/Register";
import User from "./components/User";
import AddProducts from "./screen/AddProducts";
import Checkout from "./screen/Checkout";
import Products from "./screen/Products";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected />}>
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/create-product" element={<AddProducts />} />
        <Route path="/product" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

const Home = () => {
  return <div>Home</div>;
};

export default App;
