import React, { Component }  from "react";
import { Button, Form, Grid, Header, Segment, Checkbox } from 'semantic-ui-react'
import "./styles.css";

export default class Register extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
  return(
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
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Nome' />
            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Senha'
              type='password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirmar senha'
              type='password'
            />
            <Form.Group inline>
              <label>Plano:</label>
              <Form.Field>
                <Checkbox
                  radio
                  label='Basic'
                  name='checkboxRadioGroup'
                  value='basic'
                  checked={this.state.value === 'basic'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  radio
                  label='Pro'
                  name='checkboxRadioGroup'
                  value='pro'
                  checked={this.state.value === 'pro'}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Button color='teal' fluid size='large'>
              Finalizar cadastro
          </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );}
}
