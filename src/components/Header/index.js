import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Header = (props) => {
  const { onLogin, onRegister } = props;

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
        <button className="ui item button nav-item" onClick={onLogin}>
          Entrar
        </button>
        <button className="ui item button nav-item" onClick={onRegister}>
          Cadastre-se
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
};

export default Header;
