import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="logo item">
        <span style={{ fontWeight: 900 }}>SOCIAL</span>
        <span style={{ fontWeight: 100, textDecoration: "underline overline" }}>
          SEARCH
        </span>
        <span style={{ fontWeight: 900 }}>ENGINE</span>
      </div>
      <div className="right menu">
        <Link to="/login">
          <button className="ui item button nav-item">Entrar</button>
        </Link>
        <Link to="/register">
          <button className="ui item button nav-item">Cadastre-se</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
