import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

const initialState = {
  cartItems: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let exisiting=state.cartItems.find((elm)=>elm.id==action.payload.id)
      if(exisiting){
      
        state.cartItems=state.cartItems.map((elm)=>elm.id==action.payload.id?{...elm,qty:elm.qty+1}:elm)

      }else{
        state.cartItems.push(action.payload);

      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
    },
    increaseQyt:(state,action)=>{

      state.cartItems=state.cartItems.map((elm)=>elm.id==action.payload?{...elm,qty:elm.qty+1}:elm)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 

    },
    DecreQyt:(state,action)=>{
      state.cartItems=state.cartItems.map((elm)=>elm.id==action.payload?{...elm,qty:elm.qty-1}:elm).filter((item)=>item.qty>0)
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 

    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); 
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart,increaseQyt,DecreQyt, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
