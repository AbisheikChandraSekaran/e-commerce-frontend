import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Cart from "./components/Cart";
import Signup from "./components/Register";
import Login from "./components/Login"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  

  return (
    
    <Provider store={store}>
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
    </Provider>
  
  );
};

export default App;
