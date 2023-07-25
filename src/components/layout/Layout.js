import React, { useState } from "react";
import HomePage from "../../pages/home/HomePage";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./Layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change Toggle
  const handleToggle = () => {
    setToggle(!toggle); // true <=> false
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? " toggle-sidebar sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {
                toggle ? (
                  <AiOutlineDoubleLeft size={30} />
                ) : (
                  <AiOutlineDoubleRight size={30} />
                ) //ternary operator
              }
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
      </div>
      <div className="home-div">
        <HomePage />
      </div>
    </>
  );
};

export default Layout;
