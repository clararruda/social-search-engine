import React from "react";
import { Header, Table, Segment, Grid, Divider } from "semantic-ui-react";
import { Pie } from "react-chartjs-2";

import "./styles.css";

const data = [
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
  {
    keywords: "ansiedade",
    social: "instagram",
    quantity: "145",
  },
];

const data2 = {
  labels: ["Instagram", "TikTok", "Twitter", "Youtube"],
  datasets: [
    {
      data: [300, 50, 100, 75],
      backgroundColor: ["#0CA4E8", "#0CE8F2", "#00DCA9", "#0CE838"],
      hoverBackgroundColor: ["#0CA4E8", "#0CE8F2", "#00DCA9", "#0CE838"],
    },
  ],
};

const Ranking = () => {
  return (
    <div id="ranking-container">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <div id="ranking-table">
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                  marginTop: "20px",
                }}
              >
                Ranking de buscas por palavras chave
              </h3>
              <Table celled padded columns="4" verticalAlign="middle">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell textAlign="center">#</Table.HeaderCell>
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
                {data.map((element, index) => (
                  <Table.Body key={index}>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h3" textAlign="center">
                          {index}
                        </Header>
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {element.keywords}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {element.social}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {element.quantity}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div id="pie-chart">
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "40px",
                }}
              >
                Ranking de buscas por rede social
              </h3>
              <Pie
                data={data2}
                legend={{ position: "bottom" }}
                options={{ maintainAspectRatio: false, responsive: true }}
              />
            </div>
          </Grid.Column>
        </Grid>

        <Divider vertical>+</Divider>
      </Segment>
    </div>
  );
};

export default Ranking;