import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.css";

const Navbar = (props) => {
  const { onLogout, username } = props;

  return (
    <div id="navbar-container">
      <Icon name="user circle" size="big" />
      <Dropdown text={username} className="nav-dropdown">
        <Dropdown.Menu>
          <Dropdown.Item text="Conta" onClick={() => console.log("conta")} />
          <Dropdown.Item
            text="Configurações"
            onClick={() => console.log("config")}
          />
          <Dropdown.Item text="Sair" onClick={onLogout} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

Navbar.propTypes = {
  onLogout: PropTypes.func,
  username: PropTypes.string,
};

export default withRouter(Navbar);
