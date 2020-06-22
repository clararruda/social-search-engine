import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.css";
import banner from "../../assets/images/banner.png";

import Plans from "../../components/Plans";
import Header from "../../components/Header";

const Landing = (props) => {
  const { history } = props;

  const loginHandler = () => {
    history.replace("/login");
  };

  const registerHandler = () => {
    history.replace("/register");
  };

  return (
    <div id="home">
      <div className="ui inverted masthead centered segment">
        <div
          className="ui page grid"
          style={{ borderBottom: "solid 1px #00B6AF" }}
        >
          <div className="column" style={{ paddingBottom: 0 }}>
            <Header onLogin={loginHandler} onRegister={registerHandler} />
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
              <button
                className="large basic inverted animated fade ui button"
                onClick={registerHandler}
              >
                <div className="visible content">Encontre perfis</div>
                <div className="hidden content">Cadastre-se</div>
              </button>
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

      <Plans onRegister={registerHandler} />
    </div>
  );
};

Landing.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Landing);
