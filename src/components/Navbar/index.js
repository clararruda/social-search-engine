import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import "./styles.css";

const Navbar = () => {
  return (
    <div id="navbar-container">
      <Icon name="user circle" size="big" />
      <Dropdown text="Pablo Maribondo" className="nav-dropdown">
        <Dropdown.Menu>
          <Dropdown.Item text="Conta" onClick={() => console.log("conta")} />
          <Dropdown.Item
            text="Configurações"
            onClick={() => console.log("config")}
          />
          <Dropdown.Item text="Sair" onClick={() => console.log("sair")} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Navbar;
