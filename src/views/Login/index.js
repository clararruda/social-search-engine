import React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import "./styles.css";

const Login = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <div className="logo item">
            <span style={{ fontWeight: 900 }}>SOCIAL</span>
            <span style={{ fontWeight: 100, textDecoration: "underline overline" }}>
              SEARCH
        </span>
            <span style={{ fontWeight: 900 }}>ENGINE</span>
          </div>
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Senha'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Login
          </Button>
          </Segment>
        </Form>
        <Message>
          Novo? <a href='#'>Cadastre-se</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
