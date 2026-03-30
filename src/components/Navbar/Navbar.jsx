import React from 'react';
import navimg from "../../assets/shopping-cart.png"

const Navbar = ({cart}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost font-bold text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-8 relative">
    <img className='' src={navimg} alt="" />
    {
    cart.length > 0 && (
      <span className="absolute -top-1 right-49 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
        {cart.length}
      </span>
    )
  }
    <p>Login</p>
    <button className="btn btn-primary">Get Started</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;