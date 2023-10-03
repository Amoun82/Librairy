import React from 'react';
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const UserCartIcons = () => (
  <IconContext.Provider value={{ size: "25px", className: "text-black hover:text-accent-2" }}>
    <div className="flex space-x-8">
      <Link to="/connexion-registre" className='w-auto'>
        <FaRegUser className='cursor-pointer' />
      </Link>
      <Link to="/profil" className='w-auto'>
        <FaRegUser className='cursor-pointer' />
      </Link>
      <Link to="/deconnexion">
        <FiLogOut />
      </Link>
      <FiShoppingCart className='cursor-pointer'/>
    </div>
  </IconContext.Provider>
);

export default UserCartIcons;
