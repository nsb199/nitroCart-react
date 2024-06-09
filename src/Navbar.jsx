
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar({totalCart , setTotalCart}) {
  return (
   <>
    <nav>
        <h2>nitroCart</h2>
        <div className="cart-icon">
         <AddShoppingCartIcon style={{"fontSize":"30px"}}/>
         <span>{totalCart}</span>
        </div>
    </nav>
   </>
  )
}

export default Navbar