import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Button, Divider, Form, Grid, Segment, Table } from "semantic-ui-react";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

const dropdownOptions = [
  {
    text: "Instagram",
    value: "instagram",
  },
  {
    text: "TikTok",
    value: "tiktok",
  },
  {
    text: "Twitter",
    value: "twitter",
  },
  {
    text: "Youtube",
    value: "youtube",
  },
];

const Schedule = () => {
  const [startDate, setStartDate] = useState(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  );

  return (
    <div id="schedule-container">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "20px",
              }}
            >
              Agendar buscas
            </h3>
            <Form>
              <Form.Input label="Busca" placeholder="Palavras-chave" />
              <Form.Select
                label="Rede social"
                options={dropdownOptions}
                placeholder="Selecione..."
                onChange={(event, { value }) => console.log(value)}
              />
              <div className="field">
                <label>Data</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="dd/MM/yyyy  - HH:mm"
                />
              </div>
              <Button
                content="Agendar busca"
                primary
                style={{ marginTop: "40px", marginBottom: "40px" }}
              />
            </Form>
          </Grid.Column>

          <Grid.Column>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "20px",
              }}
            >
              Buscas agendadas
            </h3>
            <Table celled padded columns="4">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign="center">Busca</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">
                    Rede Social
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Data</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">
                    Resultados
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell textAlign="center">maquiagem</Table.Cell>
                  <Table.Cell textAlign="center">twitter</Table.Cell>
                  <Table.Cell textAlign="center">25/06/2020 - 14:00</Table.Cell>
                  <Table.Cell textAlign="center">Ver resultados</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">maquiagem</Table.Cell>
                  <Table.Cell textAlign="center">twitter</Table.Cell>
                  <Table.Cell textAlign="center">25/06/2020 - 14:00</Table.Cell>
                  <Table.Cell textAlign="center">Ver resultados</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">maquiagem</Table.Cell>
                  <Table.Cell textAlign="center">twitter</Table.Cell>
                  <Table.Cell textAlign="center">25/06/2020 - 14:00</Table.Cell>
                  <Table.Cell textAlign="center">Ver resultados</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>

        <Divider vertical>+</Divider>
      </Segment>
    </div>
  );
};

export default Schedule;
