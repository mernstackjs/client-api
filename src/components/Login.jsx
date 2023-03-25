import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    axios
      .post("https://login-app-4qga.onrender.com/api/auth/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem(
          "auth",
          JSON.stringify({ user: res.data.others, token: res.data.token })
        );
        navigate("/user");
      });
  };
  return (
    <div className="lg:mx-72 md:my-48">
      <form className="p-10 shadow-xl bg-white w-full" onSubmit={login}>
        <input
          style={{
            border: "1px solid black",
            padding: "10px",
            fontSize: "20px",
            width: "100%",
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{
            border: "1px solid black",
            padding: "10px",
            fontSize: "20px",
            width: "100%",
            margin: "20px 0",
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="p-3 bg-slate-900 text-white w-full" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
