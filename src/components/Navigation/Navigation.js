import React from "react";
import c from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav className={c.nav}>
      <ul className={c.nav__block}>
        <li className={c.nav__list}>
          <NavLink className={c.nav__link} activeClassName={c.active} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={c.nav__list}>
          <NavLink className={c.nav__link} activeClassName={c.active}  to="/dialogs" >
            Messages
          </NavLink>
        </li>
        <li className={c.nav__list}>
          <NavLink className={c.nav__link} to="">
            News
          </NavLink>
        </li>
        <li className={c.nav__list}>
          <NavLink className={c.nav__link} to="">
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// <NavLink className={`${c.nav__link} ${c.active}`} activeClassName={c.active} to="/profile">  //Что бы не забыть как active добавлять

export default Navigation;
