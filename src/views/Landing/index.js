import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import banner from "../../assets/images/banner.png";

import Plans from "../../components/Plans";
import Header from "../../components/Header";

const Landing = () => {
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
                O SocialSearchEngine rastreia usuários de destaque no Instagram,
                TikTok, Twitter e YouTube!
                <br />
                Obtenha um entendimento mais profundo do crescimento e das
                tendências dos usuários utilizando o SocialSearchEngine.
              </p>
              <Link to="/register">
                <button className="large basic inverted animated fade ui button">
                  <div className="visible content">Encontre perfis</div>
                  <div className="hidden content">Cadastre-se</div>
                </button>
              </Link>
              <div className="ui centerted image">
                <img
                  src={banner}
                  alt="Banner"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Plans />
    </div>
  );
};

export default Landing;
