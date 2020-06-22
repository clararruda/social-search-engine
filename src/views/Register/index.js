import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Checkbox,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import PropTypes from "prop-types";

import "./styles.css";

import firebase from "../../utils/firebase";

const Register = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [plan, setPlan] = useState("basic");

  const { history } = props;

  const registerHandler = async () => {
    try {
      setErrorMessage(null);
      if (password !== confirmPassword) {
        setErrorMessage("As senhas devem ser iguais");
      } else if (password.length < 6) {
        setErrorMessage("A senha deve ter no mínimo 6 caracteres");
      } else {
        setIsLoading(true);
        await firebase.register(name, email, password);
        await firebase.addPlan(plan);
        history.replace("/dashboard");
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div id="register-container">
      <Grid
        textAlign="center"
        style={{ height: "100vh", marginTop: 0 }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header
            as="h2"
            color="grey"
            textAlign="center"
            style={{ marginBottom: "50px" }}
          >
            <div className="logo item">
              <span style={{ fontWeight: 900 }}>SOCIAL</span>
              <span
                style={{
                  fontWeight: 100,
                  textDecoration: "underline overline",
                }}
              >
                SEARCH
              </span>
              <span style={{ fontWeight: 900 }}>ENGINE</span>
            </div>
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Nome"
                required
                onChange={(event, { value }) => setName(value)}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail"
                required
                onChange={(event, { value }) => setEmail(value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Senha"
                type="password"
                required
                onChange={(event, { value }) => setPassword(value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirmar senha"
                type="password"
                required
                onChange={(event, { value }) => setConfirmPassword(value)}
              />
              <Form.Group inline>
                <label>Plano:</label>
                <Form.Field>
                  <Checkbox
                    radio
                    label="Básico"
                    name="checkboxRadioGroup"
                    value="basic"
                    checked={plan === "basic"}
                    onChange={(event, { value }) => setPlan(value)}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label="Pro"
                    name="checkboxRadioGroup"
                    value="pro"
                    checked={plan === "pro"}
                    onChange={(event, { value }) => setPlan(value)}
                  />
                </Form.Field>
              </Form.Group>
              {!isLoading ? (
                <Button
                  primary
                  fluid
                  size="large"
                  style={{ marginTop: "30px" }}
                  onClick={registerHandler}
                >
                  Finalizar cadastro
                </Button>
              ) : (
                <Dimmer inverted active>
                  <Loader inverted />
                </Dimmer>
              )}
              {errorMessage && (
                <div
                  className="ui red basic label"
                  style={{ marginTop: "15px" }}
                >
                  {errorMessage}
                </div>
              )}
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Register);
