import React, { useState } from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.css";

import ConfigurationModal from "../ConfigurationModal";
import InformationModal from "../InformationModal";
import DropdownMenu from "../DropdownMenu";

const Navbar = (props) => {
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { onLogout, user, plan, onPlanUpdate } = props;

  const onConfigDisplayHandler = (isOpen) => {
    setIsConfigOpen(isOpen);
  };

  const onInfoDisplayHandler = (isOpen) => {
    setIsInfoOpen(isOpen);
  };

  return (
    <div id="navbar-container">
      <Icon name="user circle" size="big" />
      <DropdownMenu
        text={user.displayName}
        className="nav-dropdown"
        pointing="top right"
        disabled={isConfigOpen || isInfoOpen}
      >
        <Dropdown.Menu>
          <InformationModal
            trigger={
              <Dropdown.Item
                text="Conta"
                icon="user"
                onClick={() => onInfoDisplayHandler(true)}
              />
            }
            user={user}
            plan={plan}
            open={isInfoOpen}
            display={onInfoDisplayHandler}
          />

          <ConfigurationModal
            trigger={
              <Dropdown.Item
                text="Configurações"
                icon="cog"
                onClick={() => onConfigDisplayHandler(true)}
              />
            }
            user={user}
            plan={plan}
            open={isConfigOpen}
            display={onConfigDisplayHandler}
            onPlanUpdate={onPlanUpdate}
          />
          <Dropdown.Divider />
          <Dropdown.Item text="Sair" icon="power off" onClick={onLogout} />
        </Dropdown.Menu>
      </DropdownMenu>
    </div>
  );
};

Navbar.propTypes = {
  onLogout: PropTypes.func,
  onPlanUpdate: PropTypes.func,
  plan: PropTypes.string,
  user: PropTypes.object,
};

export default withRouter(Navbar);
