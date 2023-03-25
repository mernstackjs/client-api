import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/Auth/authContext";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";

import { useState } from "react";
const Header = () => {
  const { user, isLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full p-3 bg-slate-900 flex justify-between items-center relative text-white">
      <span className="text-white text-2xl">BrandName</span>
      <nav
        className={` ${
          isOpen
            ? "bg-red-500 flex flex-col absolute top-16 right-0 left-0 z-10"
            : "hidden"
        } md:flex gap-4 uppercase `}
      >
        <Link className="text-white" to="/create-product">
          Create-Product
        </Link>
        <Link className="text-white" to="/product">
          Product
        </Link>
        <Link className="text-white" to="/blog">
          Blog
        </Link>
      </nav>

      <div
        className="
      md:flex gap-4 justify-center items-center hidden"
      >
        {!isLoading && user ? (
          <button className="bg-white md:flex hidden text-black p-1 rounded-lg uppercase">
            {user.username}
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link
          to="/checkout"
          className="flex gap-4 justify-center items-center relative "
        >
          <BsFillCartCheckFill size="24" />
          <span className="absolute  bottom-3 left-3 text-lg text-[red]">
            12
          </span>
        </Link>
      </div>
      <AiOutlineMenu
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
        size="34"
      />
    </header>
  );
};

export default Header;
