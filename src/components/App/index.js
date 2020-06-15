import React from "react";
import "./styles.css";
import banner from "../../assets/images/banner.png";

import Plans from "../Plans";
import Header from "../Header";

const App = () => {
  return (
    <div id="home">
      <div className="ui inverted masthead centered segment">
        <div
          className="ui page grid"
          style={{ borderBottom: "solid 1px #00B6AF" }}
        >
          <div className="column" style={{ paddingBottom: 0 }}>
            <Header />
            <div className="ui transition information">
              <h1 className="ui inverted centered header">
                Analytics simplificado na ponta dos dedos!
              </h1>
              <p className="ui centered lead">
                O SocialSearchEngine rastreia as estatísticas de usuários do
                YouTube, Instagram e Twitter!
                <br />
                Obtenha um entendimento mais profundo do crescimento e das
                tendências dos usuários utilizando o SocialSearchEngine.
              </p>
              <button className="large basic inverted animated fade ui button">
                <div className="visible content">Encontre perfis</div>
                <div className="hidden content">Cadastre-se</div>
              </button>
              <div className="ui centerted image">
                <img src={banner} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Plans />
    </div>
  );
};

export default App;
