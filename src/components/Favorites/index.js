import React, { useState, useEffect } from "react";
import { Table, Segment, Grid, Dimmer, Loader } from "semantic-ui-react";

import firebase from "../../utils/firebase";

const Favorites = () => {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    (async () => {
      if (favorites === null) {
        const favoritesList = await firebase.getFavorites();
        setFavorites(favoritesList);
      }
    })();
  }, [favorites]);
  return (
    <div className="main-container">
      <Grid columns={1} padded stackable>
        <Grid.Row centered>
          <Grid.Column width={14}>
            <Segment raised>
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                  marginTop: "20px",
                }}
              >
                Buscas favoritas
              </h3>
              {favorites ? (
                <Table
                  celled
                  padded
                  columns="3"
                  style={{ width: "90%", margin: "0 5%  20px 5%" }}
                >
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell textAlign="center">
                        Busca
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        Rede Social
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        Opções
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {favorites.map((element, index) => (
                      <Table.Row key={index}>
                        <Table.Cell textAlign="center">
                          {element.query}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                          {element.social}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                          Buscar novamente
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              ) : (
                <Dimmer inverted active>
                  <Loader inverted />
                </Dimmer>
              )}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Favorites;
