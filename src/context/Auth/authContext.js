import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const authContext = createContext();

export const ProviderContext = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSub = async () => {
      const auth = JSON.parse(localStorage.getItem("auth"));
      setToken(auth?.token);
      setUser(auth?.user);
      setIsLoading(false);
    };
    return () => {
      unSub();
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
    setToken(null);
    setIsLoading(true);
  };
  return (
    <authContext.Provider value={{ user, token, isLoading, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useUser = () => {
  return useContext(authContext);
};
