import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

type NavItemPropsType = {
  elementName: string,
  path: string
}
const NavItem = (props: NavItemPropsType) => {
  return (

    <li className="navItem">
      <NavLink to={props.path}>
        {props.elementName}
      </NavLink>
    </li>
  );
};

export default NavItem;
