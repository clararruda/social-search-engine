import React from "react";
import "./styles.css";
import banner from "../../assets/images/banner.png";

import FeaturesSection from "../FeaturesSection";
import Header from "../Header";

const App = () => {
  return (
    <div id="home">
      <div className="ui inverted masthead centered segment">
        <div className="ui page grid" style={{ height: "100vh" }}>
          <div className="column">
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
                <img src={banner} alt="Banner" style={{ maxWidth: "100vw" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeaturesSection />
    </div>
  );
};

export default App;
