import React from "react";
import { Table, Segment, Grid } from "semantic-ui-react";

import "./styles.css";

const Favorites = () => {
  return (
    <div id="favorites-container">
      <Segment placeholder>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <Table celled padded columns="3">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign="center">Busca</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">
                    Rede Social
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Opções</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell textAlign="center">maquiagem</Table.Cell>
                  <Table.Cell textAlign="center">twitter</Table.Cell>
                  <Table.Cell textAlign="center">Buscar novamente</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">maquiagem</Table.Cell>
                  <Table.Cell textAlign="center">twitter</Table.Cell>
                  <Table.Cell textAlign="center">Buscar novamente</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">maquiagem</Table.Cell>
                  <Table.Cell textAlign="center">twitter</Table.Cell>
                  <Table.Cell textAlign="center">Buscar novamente</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default Favorites;
