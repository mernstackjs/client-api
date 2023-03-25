import axios from "axios";
import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../proreducer/reducer";

const productContext = createContext();

export const ProviderProducts = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "FETCHINGISLOADING" });

    const unSub = async () => {
      const res = await axios.get(
        "https://login-app-4qga.onrender.com/get-product"
      );
      try {
        dispatch({ type: "FETCHINGSUCCESS", payload: res });
      } catch (error) {
        dispatch({ type: "FETCHINGISERROR", payload: error });
      }
    };
    return () => unSub();
  }, []);

  const addcart = (item) => {
    dispatch({ type: "ADDCART", payload: item });
  };
  const increase = () => {
    dispatch({ type: "INCREASEQUANTITY" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASEQUANTITY" });
  };
  return (
    <productContext.Provider
      value={{ state, dispatch, addcart, increase, decrease }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(productContext);
};
