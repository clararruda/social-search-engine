import React, { useState, useEffect } from "react";
import { Modal, Icon, Header, Form, Checkbox, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const ConfigurationModal = (props) => {
  const [configName, setConfigName] = useState(null);
  const [configPlan, setConfigPlan] = useState(null);

  const { trigger, user, plan, open, display } = props;

  useEffect(() => {
    if (plan !== null) {
      setConfigName(user.displayName);
      setConfigPlan(plan);
    }
  }, [plan, user]);

  const onEditUserHandler = () => {
    console.log(configPlan);
    console.log(configName);
    display(false);
  };

  return (
    <Modal
      size="tiny"
      trigger={trigger}
      closeIcon
      open={open}
      onClose={() => display(false)}
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
  );
};

ConfigurationModal.propTypes = {
  trigger: PropTypes.object,
  user: PropTypes.object,
  plan: PropTypes.string,
  open: PropTypes.bool,
  display: PropTypes.func,
};

export default ConfigurationModal;
