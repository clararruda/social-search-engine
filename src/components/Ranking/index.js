import React, { useState, useEffect } from "react";
import { Header, Table, Segment, Grid, Divider, Icon } from "semantic-ui-react";
import { Pie } from "react-chartjs-2";

import firebase from "../../utils/firebase";

import "./styles.css";

const Ranking = () => {
  const [keywordsRanking, setKeywordsRanking] = useState([]);
  const [socialRanking, setSocialRanking] = useState([]);

  useEffect(() => {
    (async () => {
      if (keywordsRanking.length === 0) {
        const { list, statistics } = await firebase.getRanking();
        setKeywordsRanking(list);
        setSocialRanking(statistics);
      }
    })();
  });

  return (
    <div className="main-container">
      <Grid columns={2} stackable padded>
        <Grid.Row>
          <Grid.Column width={11}>
            <Segment raised>
              <div id="ranking-table">
                <h4 className="title-header">
                  <Icon name="angle right" />
                  Ranking de buscas por palavras chave
                </h4>
                <Divider />
                {keywordsRanking.length !== 0 && (
                  <Table
                    celled
                    columns="4"
                    verticalAlign="middle"
                    style={{ width: "90%", margin: "0 5%  20px 5%" }}
                  >
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell textAlign="center">
                          #
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">
                          Busca
                        </Table.HeaderCell>
                        <Table.HeaderCell singleLine textAlign="center">
                          Rede social
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">
                          Quantidade
                        </Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    {keywordsRanking.map((element, index) => (
                      <Table.Body key={index}>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" textAlign="center">
                              {index + 1}
                            </Header>
                          </Table.Cell>
                          <Table.Cell textAlign="center">
                            {element.query}
                          </Table.Cell>
                          <Table.Cell textAlign="center">
                            {element.social}
                          </Table.Cell>
                          <Table.Cell textAlign="center">
                            {element.amount}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    ))}
                  </Table>
                )}
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment raised style={{ height: "300px" }}>
              <div id="pie-chart">
                <h4 className="title-header">
                  <Icon name="angle right" />
                  Ranking de buscas por rede social
                </h4>
                <Divider />
                {socialRanking.length !== 0 && (
                  <Pie
                    data={{
                      labels: ["Instagram", "TikTok", "Twitter", "Youtube"],
                      datasets: [
                        {
                          data: socialRanking,
                          backgroundColor: [
                            "#0CA4E8",
                            "#0CE8F2",
                            "#00DCA9",
                            "#0CE838",
                          ],
                          hoverBackgroundColor: [
                            "#0CA4E8",
                            "#0CE8F2",
                            "#00DCA9",
                            "#0CE838",
                          ],
                        },
                      ],
                    }}
                    legend={{ position: "right" }}
                    options={{ maintainAspectRatio: false, responsive: true }}
                  />
                )}
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Ranking;
