import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Checkbox,
} from "semantic-ui-react";

import "./styles.css";

const Register = () => {
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
              />
              <Form.Input
                fluid
                icon="mail"
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
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirmar senha"
                type="password"
              />
              <Form.Group inline>
                <label>Plano:</label>
                <Form.Field>
                  <Checkbox
                    radio
                    label="Básico"
                    name="checkboxRadioGroup"
                    value="basic"
                    checked={true}
                    onChange={() => console.log("manda")}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label="Pro"
                    name="checkboxRadioGroup"
                    value="pro"
                    checked={false}
                    onChange={() => console.log("manda")}
                  />
                </Form.Field>
              </Form.Group>
              <Button primary fluid size="large" style={{ marginTop: "30px" }}>
                Finalizar cadastro
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Register;
