import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Table,
  Dimmer,
  Loader,
} from "semantic-ui-react";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

import firebase from "../../utils/firebase";

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
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  const [query, setQuery] = useState("");
  const [social, setSocial] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(tomorrow);
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    (async () => {
      if (scheduleList !== undefined && scheduleList.length === 0) {
        try {
          setScheduleList(undefined);
          const user = firebase.getCurrentUser();
          await firebase.db
            .collection("users")
            .doc(user.uid)
            .onSnapshot(async (snapshot) => {
              const scheduled = snapshot.data().scheduled;
              scheduled.sort(function (a, b) {
                if (a.date > b.date) {
                  return -1;
                }
                if (a.date < b.date) {
                  return 1;
                }
                return 0;
              });
              setScheduleList(scheduled);
              setQuery("");
              setSocial("");
              setStartDate(tomorrow);
              setIsLoading(false);
            });
        } catch (error) {
          console.log(error.message);
        }
      }
    })();
  });

  const onScheduleHandler = async () => {
    try {
      setIsLoading(true);
      await firebase.addScheduledSearch({ query, social, startDate });
      setQuery("");
      setSocial("");
      setStartDate(tomorrow);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

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
              <Form.Input
                label="Busca"
                placeholder="Palavras-chave"
                required
                value={query}
                onChange={(event, { value }) => setQuery(value)}
              />
              <Form.Select
                label="Rede social"
                options={dropdownOptions}
                placeholder="Selecione..."
                required
                value={social}
                onChange={(event, { value }) => setSocial(value)}
              />
              <div className="required field">
                <label>Data</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Selecione..."
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={60}
                  timeCaption="time"
                  dateFormat="dd/MM/yyyy  - HH:mm"
                  minDate={tomorrow}
                />
              </div>
              {!isLoading ? (
                <Button
                  content="Agendar busca"
                  primary
                  style={{ marginTop: "40px", marginBottom: "40px" }}
                  disabled={
                    query.length === 0 ||
                    social.length === 0 ||
                    startDate === null
                  }
                  onClick={onScheduleHandler}
                />
              ) : (
                <Dimmer inverted active>
                  <Loader inverted />
                </Dimmer>
              )}
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
                {scheduleList &&
                  scheduleList.map((element, index) => (
                    <Table.Row key={index}>
                      <Table.Cell textAlign="center">
                        {element.query}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {element.social}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {element.date.toDate().toLocaleString()}
                      </Table.Cell>
                      <Table.Cell textAlign="center">Ver resultados</Table.Cell>
                    </Table.Row>
                  ))}
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
