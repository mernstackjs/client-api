import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/Auth/authContext";

export const Protected = () => {
  const { token, isLoading } = useUser();
  const [isProtected, setIsProtected] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      const isValidToken = token ? true : false;
      setIsProtected(isValidToken);
    }
  }, [isLoading, token]);

  if (isProtected === null) {
    return null; // or a loading indicator
  }

  return (
    <>{!isProtected ? <Navigate to="/login" replace={true} /> : <Outlet />}</>
  );
};
