import React from "react";
import c from "./Header.module.css";
import {NavLink} from 'react-router-dom';
const Header = (props) => {
  return <header className={c.header}>
      <img className={c.header_img} src="https://www.logaster.ru/static/v3/img/products/logo.png"/>
      <div className={c.login_block}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
}

export default Header;
