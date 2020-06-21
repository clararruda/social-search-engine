import React, { useState } from "react";
import ky from "ky";
import queryString from "query-string";
import { Button, Dropdown, Loader, Icon } from "semantic-ui-react";

import "./styles.css";

import SearchResult from "../SearchResult";

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

const Search = () => {
  const [social, setSocial] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSocialChangeHandler = (event, { value }) => {
    setSocial(value);
    setResult([]);
  };

  const onSubmitHandler = async () => {
    setIsLoading(true);
    try {
      const response = await ky
        .get(`${process.env.REACT_APP_SERVER_URL}/api/v1/profiles`, {
          searchParams: queryString.stringify({
            social,
            search: query,
            is_premium: false,
          }),
          timeout: 25000,
        })
        .json();

      setIsLoading(false);
      setResult(response.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div id="search-container">
      <div id="search-navigation">
        <div className="ui search" style={{ marginRight: "20px" }}>
          <div className="ui icon input" style={{ width: "500px" }}>
            <input
              className="prompt"
              type="text"
              placeholder="Palavras-chave"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>

        <Dropdown
          placeholder="Escolha a rede social"
          selection
          options={dropdownOptions}
          value={social}
          onChange={onSocialChangeHandler}
          style={{ marginRight: "30px" }}
        />

        <Button
          primary
          onClick={onSubmitHandler}
          disabled={social === null || query.length === 0}
          style={{ marginRight: "30px" }}
        >
          Buscar
        </Button>
        <Button
          onClick={() => console.log("favoritar")}
          color="red"
          disabled={social === null || query.length === 0}
          style={{ marginRight: "30px" }}
        >
          <Icon name="heart" />
          <span>Favoritar busca</span>
        </Button>
      </div>
      {!isLoading ? (
        result.length !== 0 ? (
          <SearchResult data={result} social={social} />
        ) : (
          <div></div>
        )
      ) : (
        <Loader content="Buscando" active />
      )}
    </div>
  );
};

export default Search;
