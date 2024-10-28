import React from "react";
import logo from '../../assets/images/image.png'
import { Image } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" container mx-auto ">
      <div className="fixed text-white py-6 px-4">
        <h1 className="text-4xl font-bold">
           <Link to="/">
           
           <Image height={40} preview={false} src={logo} alt="logo"  />
           </Link>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
