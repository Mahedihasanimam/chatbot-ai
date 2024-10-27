import React from "react";
import logo from '../../assets/images/image.png'
import { Image } from "antd";

const Navbar = () => {
  return (
    <div className=" container mx-auto ">
      <div className="fixed text-white py-6 px-4">
        <h1 className="text-4xl font-bold">
            <Image preview={false} src={logo} alt="logo"  />
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
