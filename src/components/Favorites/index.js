import React, { useState, useEffect } from "react";
import { Table, Segment, Grid, Dimmer, Loader } from "semantic-ui-react";

import firebase from "../../utils/firebase";

import "./styles.css";

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
    <div id="favorites-container">
      <Segment placeholder>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            {favorites ? (
              <Table celled padded columns="3">
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
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default Favorites;
