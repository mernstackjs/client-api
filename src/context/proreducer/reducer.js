export const initialState = {
  cart: [],
  products: [],
  total: 0, // new state variable to store total price
  isLoading: true,
  isError: false,
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHINGISLOADING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "FETCHINGISERROR":
      return {
        isError: true,
        isLoading: false,
        error: action.payload,
      };
    case "FETCHINGSUCCESS":
      return {
        isError: false,
        isLoading: false,
        products: action.payload,
      };
    case "ADDCART":
      const cart = state.cart || []; // check if cart exists
      const item = action.payload;

      // Check if the item already exists in the cart
      const existingItem = cart.find((cartItem) => cartItem._id === item._id);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity by 1
        const updatedCart = cart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        localStorage.setItem("cart", JSON.stringify(cart));
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the item does not exist in the cart, add it with quantity 1
        const newCart = [...cart, { ...item, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(cart));
        return {
          ...state,
          cart: newCart,
        };
      }

    case "INCREASEQUANTITY":
      const incCart = state.cart || []; // check if cart exists
      const updatedIncCart = incCart.map((cartItem) =>
        cartItem._id === action.payload
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      localStorage.setItem("cart", JSON.stringify(updatedIncCart));
      return {
        ...state,
        cart: updatedIncCart,
      };
    case "DECREASEQUANTITY":
      const decCart = state.cart || []; // check if cart exists
      const updatedDecCart = decCart
        .map((cartItem) =>
          cartItem._id === action.payload
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(updatedDecCart));
      return {
        ...state,
        cart: updatedDecCart,
      };

    default:
      return state;
  }
};

// Add the following function to calculate the total price
export const getTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};
