import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
function Navbar(){
    const[menu,setMenu]=useState("shop")
    const { getTotalCartItems} = useContext(ShopContext);
    return(
        <div className="nav">
            <div className="logo-nav">
                <img src={logo} alt="" />
                <p>KYSAM MALL</p>
            </div>
            <ul className="menu-nav">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>MEN</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>WOMEN</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>KIDS</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="logincart-nav">
               <Link to='/login'><button className="login">LOGIN</button></Link> 
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="cartcount-nav">{ getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;