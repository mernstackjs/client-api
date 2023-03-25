import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/Auth/authContext";

const User = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    // setToken(auth?.token);
    setUser(auth?.user);
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center text-white">
      <p className="text-2xl">Welcome</p>
      {!isLoading && (
        <h1 className="text-6xl uppercase mt-10"> {user.username}</h1>
      )}
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="mt-10 rounded-md bg-green-800 text-white p-3 w-40 text-2xl"
      >
        Logout
      </button>
    </div>
  );
};

export default User;
