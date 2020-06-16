import React from "react";
import { Grid, Menu, Icon } from "semantic-ui-react";
import "./styles.css";

const Sidebar = () => {
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
              <Menu.Item className="menu-item active-menu-item">
                <Icon
                  name="search"
                  size="large"
                  className="menu-item-icon"
                  color="green"
                />
                <span className="active-menu-item-content">Buscar Perfis</span>
              </Menu.Item>
              <Menu.Item className="menu-item">
                <Icon
                  name="chart bar outline"
                  size="large"
                  className="menu-item-icon"
                />
                <span>Ranking de Buscas</span>
              </Menu.Item>
              <Menu.Item className="menu-item">
                <Icon
                  name="calendar alternate outline"
                  size="large"
                  className="menu-item-icon"
                />
                <span>Agendar Buscas</span>
              </Menu.Item>
              <Menu.Item className="menu-item">
                <Icon
                  name="heart outline"
                  size="large"
                  className="menu-item-icon"
                />
                <span>Buscas Favoritas</span>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Sidebar;
