import React from "react";
import c from "./Header.module.css";
function Header() {
  return (
    <header className={c.header}>
      <img
        className={c.header_img}
        src="https://www.logaster.ru/static/v3/img/products/logo.png"
      />
    </header>
  );
}

export default Header;
