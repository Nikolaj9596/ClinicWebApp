import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import "./NavBar.css";

const NavBar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <ul className="navList">
        <NavItem path="doctors" elementName="Врачи"></NavItem>
        <NavItem path="clients" elementName="Клиенты"></NavItem>
    </ul>
  );
};

export default NavBar;
