
import React from 'react'
import Navbar  from './Navbar'
import Cart from './Cart'
import {data} from "./data"

import "./App.css"

import  { useState } from 'react'
function App() {

  const [cart,setCart] = useState(data);
  const [totalCart , setTotalCart] = useState(cart.length);

  return (
    <>
     <Navbar totalCart={totalCart} setTotalCart={setTotalCart}/>
     <Cart totalCart={totalCart} setTotalCart={setTotalCart} cart={cart} setCart={setCart}/>
    </>
  )
}

export default App