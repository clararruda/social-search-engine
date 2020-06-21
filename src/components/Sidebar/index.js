import React from "react";
import { Grid, Menu, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./styles.css";

const Sidebar = (props) => {
  const { onActiveTabChange, activeTab } = props;

  return (
    <div
      className="ui visible left vertical wide sidebar menu"
      id="left-sidebar"
    >
      <div className="dash-logo">
        <span style={{ fontWeight: 900 }}>SOCIAL</span>
        <span style={{ fontWeight: 100, textDecoration: "underline overline" }}>
          SEARCH
        </span>
        <span style={{ fontWeight: 900 }}>ENGINE</span>
      </div>
      <div className="menu-container">
        <Grid>
          <Grid.Column>
            <Menu fluid vertical secondary size="huge" className="menu-content">
              <Menu.Item
                className={
                  activeTab === "search"
                    ? "menu-item active-menu-item"
                    : "menu-item"
                }
                onClick={() => onActiveTabChange("search")}
              >
                <Icon
                  name="search"
                  size="large"
                  className="menu-item-icon"
                  color={activeTab === "search" ? "green" : "grey"}
                />
                <span
                  className={
                    activeTab === "search" ? "active-menu-item-content" : ""
                  }
                >
                  Buscar Perfis
                </span>
              </Menu.Item>
              <Menu.Item
                className={
                  activeTab === "ranking"
                    ? "menu-item active-menu-item"
                    : "menu-item"
                }
                onClick={() => onActiveTabChange("ranking")}
              >
                <Icon
                  name="chart bar outline"
                  size="large"
                  className="menu-item-icon"
                  color={activeTab === "ranking" ? "green" : "grey"}
                />
                <span
                  className={
                    activeTab === "ranking" ? "active-menu-item-content" : ""
                  }
                >
                  Ranking de Buscas
                </span>
              </Menu.Item>
              <Menu.Item
                className={
                  activeTab === "schedule"
                    ? "menu-item active-menu-item"
                    : "menu-item"
                }
                onClick={() => onActiveTabChange("schedule")}
              >
                <Icon
                  name="calendar alternate outline"
                  size="large"
                  className="menu-item-icon"
                  color={activeTab === "schedule" ? "green" : "grey"}
                />
                <span
                  className={
                    activeTab === "schedule" ? "active-menu-item-content" : ""
                  }
                >
                  Agendar Buscas
                </span>
              </Menu.Item>
              <Menu.Item
                className={
                  activeTab === "favorites"
                    ? "menu-item active-menu-item"
                    : "menu-item"
                }
                onClick={() => onActiveTabChange("favorites")}
              >
                <Icon
                  name="heart outline"
                  size="large"
                  className="menu-item-icon"
                  color={activeTab === "favorites" ? "green" : "grey"}
                />
                <span
                  className={
                    activeTab === "favorites" ? "active-menu-item-content" : ""
                  }
                >
                  Buscas Favoritas
                </span>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onActiveTabChange: PropTypes.func,
  activeTab: PropTypes.string,
};

export default Sidebar;
