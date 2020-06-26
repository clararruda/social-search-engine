import React, { useState, useEffect } from "react";
import {
  Modal,
  Icon,
  Header,
  Form,
  Checkbox,
  Button,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import PropTypes from "prop-types";

import firebase from "../../utils/firebase";

const ConfigurationModal = (props) => {
  const [configName, setConfigName] = useState(null);
  const [configPlan, setConfigPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { trigger, user, plan, open, display, onPlanUpdate } = props;

  useEffect(() => {
    if (!open) {
      setConfigName(user.displayName);
      setConfigPlan(plan);
    }
  }, [open, user, plan]);

  const onEditUserHandler = async () => {
    try {
      setIsLoading(true);

      if (configName.length > 0 && configName !== user.displayName) {
        await firebase.updateCurrentUserName(configName);
      }

      if (configPlan !== plan) {
        await firebase.updateCurrentUserPlan(configPlan);
        onPlanUpdate(configPlan);
      }

      setIsLoading(false);
      display(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
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

          {!isLoading ? (
            <Button
              content="Confirmar"
              primary
              floated="right"
              style={{ marginBottom: "20px" }}
              onClick={onEditUserHandler}
            />
          ) : (
            <Dimmer inverted active>
              <Loader inverted />
            </Dimmer>
          )}
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
  onPlanUpdate: PropTypes.func,
};

export default ConfigurationModal;
