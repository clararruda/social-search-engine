import React from "react";
import { Card, Image, Label } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./styles.css";

const templates = {
  instagram(data) {
    return data.map((element, index) => (
      <Card key={index}>
        <Card.Content>
          <Image
            floated="left"
            circular
            src={element.profilePictureUrl}
            style={{
              border: "solid 2px #2f4858",
              height: "50px",
              width: "50px",
            }}
          />
          <Card.Header>
            <a
              href={element.url}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              {element.name}
            </a>
          </Card.Header>
          <Card.Meta>{element.username}</Card.Meta>
          <Card.Description style={{ wordBreak: "break-word" }}>
            {element.biography}
          </Card.Description>
        </Card.Content>
        {element.isVerified && (
          <Label
            as="span"
            color="teal"
            ribbon
            style={{ width: "fit-content", margin: "2px 14px" }}
          >
            Verificado
          </Label>
        )}
        <Card.Content extra>
          Seguidores: {element.followers}
          <br />
          Seguindo: {element.following}
          <br />
          Média de Likes: {element.likeAverage}
          <br />
          Engajamento: {element.engagement}%
        </Card.Content>
      </Card>
    ));
  },
  tiktok(data) {
    return data.map((element, index) => (
      <Card key={index}>
        <Card.Content>
          <Image
            floated="left"
            circular
            src={element.profilePictureUrl}
            style={{
              border: "solid 2px #2f4858",
              height: "50px",
              width: "50px",
            }}
          />
          <Card.Header>
            <a
              href={element.url}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              {element.name}
            </a>
          </Card.Header>
          <Card.Meta>{element.username}</Card.Meta>
          <Card.Description style={{ wordBreak: "break-word" }}>
            {element.signature}
          </Card.Description>
        </Card.Content>
        {element.isVerified && (
          <Label
            as="span"
            color="teal"
            ribbon
            style={{ width: "fit-content", margin: "2px 14px" }}
          >
            Verificado
          </Label>
        )}
        <Card.Content extra>
          Seguidores: {element.followers}
          <br />
          Seguindo: {element.following}
          <br />
          Curtidas: {element.likes}
          <br />
          Vídeos: {element.videos}
        </Card.Content>
      </Card>
    ));
  },
  twitter(data) {
    return data.map((element, index) => (
      <Card key={index}>
        <Card.Content>
          <Image
            floated="left"
            circular
            src={element.profilePictureUrl}
            style={{
              border: "solid 2px #2f4858",
              height: "50px",
              width: "50px",
            }}
          />
          <Card.Header>
            <a
              href={element.url}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              {element.name}
            </a>
          </Card.Header>
          <Card.Meta>{element.username}</Card.Meta>
          <Card.Description style={{ wordBreak: "break-word" }}>
            {element.description}
          </Card.Description>
        </Card.Content>
        {element.isVerified && (
          <Label
            as="span"
            color="teal"
            ribbon
            style={{ width: "fit-content", margin: "2px 14px" }}
          >
            Verificado
          </Label>
        )}
        <Card.Content extra>
          Seguidores: {element.followers}
          <br />
          Seguindo: {element.following}
          <br />
          Curtidas: {element.likes}
          <br />
          Tweets: {element.tweets}
        </Card.Content>
      </Card>
    ));
  },
  youtube(data) {
    return data.map((element, index) => (
      <Card key={index}>
        <Card.Content>
          <Image
            floated="left"
            circular
            src={element.profilePictureUrl}
            style={{
              border: "solid 2px #2f4858",
              height: "50px",
              width: "50px",
            }}
          />
          <Card.Header>
            <a
              href={element.url}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              {element.name}
            </a>
          </Card.Header>
          <Card.Description style={{ wordBreak: "break-word" }}>
            {element.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Inscritos: {element.subscriberCount}
          <br />
          Visualizações: {element.viewCount}
          <br />
          Vídeos: {element.videoCount}
        </Card.Content>
      </Card>
    ));
  },
};

const SearchResult = (props) => {
  const { data, social } = props;
  return (
    <div id="search-result">
      <Card.Group stackable itemsPerRow={4} centered>
        {templates[social](data)}
      </Card.Group>
    </div>
  );
};

SearchResult.propTypes = {
  data: PropTypes.array,
  social: PropTypes.string,
};

export default SearchResult;
