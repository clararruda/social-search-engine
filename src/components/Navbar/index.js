import React, { useState, useEffect } from "react";
import {
  Dropdown,
  Icon,
  Modal,
  Header,
  List,
  Form,
  Button,
  Checkbox,
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.css";

const Navbar = (props) => {
  const { onLogout, user, plan } = props;

  const [configName, setConfigName] = useState(null);
  const [configPlan, setConfigPlan] = useState(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  useEffect(() => {
    if (plan !== null) {
      setConfigName(user.displayName);
      setConfigPlan(plan);
    }
  }, [plan, user]);

  const onEditUserHandler = () => {
    console.log(configPlan);
    console.log(configName);
    setIsConfigOpen(false);
  };

  return (
    <div id="navbar-container">
      <Icon name="user circle" size="big" />
      <Dropdown
        text={user.displayName}
        className="nav-dropdown"
        pointing="top right"
      >
        <Dropdown.Menu>
          <Modal
            size="tiny"
            trigger={<Dropdown.Item text="Conta" icon="user" />}
            closeIcon
          >
            <Modal.Header>
              <Icon name="user" /> Informações da Conta
            </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <List>
                  <List.Item>
                    <strong>Nome:</strong> {user.displayName}
                  </List.Item>
                  <List.Item>
                    <strong>E-mail:</strong> {user.email}
                  </List.Item>
                  <List.Item>
                    <strong>Plano:</strong> {plan === "pro" ? "Pro" : "Básico"}
                  </List.Item>
                  <List.Item>
                    <strong>Membro desde:</strong>{" "}
                    {new Date(user.metadata.creationTime).toLocaleDateString()}
                  </List.Item>
                  <List.Item>
                    <strong>Último acesso:</strong>{" "}
                    {new Date(user.metadata.lastSignInTime).toLocaleString()}
                  </List.Item>
                </List>
              </Modal.Description>
            </Modal.Content>
          </Modal>

          <Modal
            size="tiny"
            trigger={
              <Dropdown.Item
                text="Configurações"
                icon="cog"
                onClick={() => setIsConfigOpen(true)}
              />
            }
            open={isConfigOpen}
            onClose={() => setIsConfigOpen(false)}
            closeIcon
          >
            <Modal.Header>
              <Icon name="cog" /> Configurações da Conta
            </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header>Editar</Header>

                <Form>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Nome"
                    label="Nome"
                    value={configName}
                    onChange={(event, { value }) => setConfigName(value)}
                  />
                  {configPlan && (
                    <Form.Group inline>
                      <label>Plano:</label>
                      <Form.Field>
                        <Checkbox
                          radio
                          label="Básico"
                          name="checkboxRadioGroup"
                          value="basic"
                          checked={configPlan === "basic"}
                          onChange={(event, { value }) => setConfigPlan(value)}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label="Pro"
                          name="checkboxRadioGroup"
                          value="pro"
                          checked={configPlan === "pro"}
                          onChange={(event, { value }) => setConfigPlan(value)}
                        />
                      </Form.Field>
                    </Form.Group>
                  )}
                </Form>
                <Button
                  content="Confirmar"
                  primary
                  floated="right"
                  style={{ marginBottom: "20px" }}
                  onClick={onEditUserHandler}
                />
              </Modal.Description>
            </Modal.Content>
          </Modal>
          <Dropdown.Divider />
          <Dropdown.Item text="Sair" icon="power off" onClick={onLogout} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

Navbar.propTypes = {
  onLogout: PropTypes.func,
  plan: PropTypes.string,
  user: PropTypes.object,
};

export default withRouter(Navbar);
