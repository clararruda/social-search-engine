import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import PropTypes from "prop-types";

import "./styles.css";

import firebase from "../../utils/firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  const { history } = props;

  if (firebase.getCurrentUser()) {
    history.replace("/dashboard");
    return null;
  }

  const loginHandler = async () => {
    try {
      setIsUnauthorized(false);
      setIsLoading(true);
      await firebase.login(email, password);
      history.replace("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsUnauthorized(true);
      setIsLoading(false);
    }
  };

  return (
    <div id="login-container">
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
              {!isLoading ? (
                <Button
                  primary
                  fluid
                  size="large"
                  style={{ marginTop: "30px" }}
                  onClick={loginHandler}
                >
                  Login
                </Button>
              ) : (
                <Dimmer inverted active>
                  <Loader inverted />
                </Dimmer>
              )}
              {isUnauthorized && (
                <div
                  className="ui red basic label"
                  style={{ marginTop: "15px" }}
                >
                  E-mail ou senha inválidos
                </div>
              )}
            </Segment>
          </Form>

          <Message>
            Novo?{" "}
            <Link to="/register">
              <span style={{ color: "#0CA4E8", cursor: "pointer" }}>
                Cadastre-se
              </span>
            </Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Login);
