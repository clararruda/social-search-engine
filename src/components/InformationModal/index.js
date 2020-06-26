import React from "react";
import { Modal, Icon, List } from "semantic-ui-react";
import PropTypes from "prop-types";

const InformationModal = (props) => {
  const { trigger, plan, user, open, display } = props;

  return (
    <Modal
      size="tiny"
      trigger={trigger}
      closeIcon
      open={open}
      onClose={() => display(false)}
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
  );
};

InformationModal.propTypes = {
  trigger: PropTypes.object,
  plan: PropTypes.string,
  user: PropTypes.object,
  open: PropTypes.bool,
  display: PropTypes.func,
};

export default InformationModal;
