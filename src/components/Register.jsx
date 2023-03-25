import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    axios
      .post("https://login-app-4qga.onrender.com/api/auth/register", {
        email,
        password,
        username,
      })
      .then((res) => {
        navigate("/login");
        localStorage.setItem(
          "auth",
          JSON.stringify({ user: res.data.others, token: res.data.token })
        );
      });
  };
  return (
    <div className="lg:mx-72 md:my-48">
      <form className="p-10 shadow-xl bg-white w-full" onSubmit={register}>
        <input
          style={{
            border: "1px solid black",
            padding: "10px",
            fontSize: "20px",
            width: "100%",
          }}
          type="email"
          placeholder="Enter Email"
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
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          style={{
            border: "1px solid black",
            padding: "10px",
            fontSize: "20px",
            width: "100%",
            margin: "20px 0",
          }}
          placeholder="Enter Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="p-3 bg-slate-900 text-white w-full" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
