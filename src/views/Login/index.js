import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import "./styles.css";

const Login = () => {
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
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Senha"
                type="password"
              />

              <Button primary fluid size="large" style={{ marginTop: "30px" }}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Novo?{" "}
            <span style={{ color: "#0CA4E8", cursor: "pointer" }}>
              Cadastre-se
            </span>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
