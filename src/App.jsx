import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Cart from "./components/Cart";
import Signup from "./components/Register";
import Login from "./components/Login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { setToken } from "./redux/userSlice";


const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    dispatch(setToken(token))},[])
  

  return (
    
   
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
          {/* <Route path="/" element={<Login />}> */}
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
   
  
  );
};

export default App;
