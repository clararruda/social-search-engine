import React, { useState } from "react";
import { Transition, Visibility } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./styles.css";

const Plans = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePlan, setActivePlan] = useState("monthly");

  const { onRegister } = props;

  return (
    <div id="pricing-section" className="ui container centered">
      <h1 className="ui centered header">Escolha seu plano ideal</h1>

      <div className="ui centered header">
        <div
          className="active-btn"
          style={
            activePlan === "monthly"
              ? { marginLeft: "3px" }
              : { marginLeft: "115px" }
          }
        ></div>
        <div id="group-btn" className="ui buttons">
          <div
            className="ui button plan-btn"
            onClick={() => setActivePlan("monthly")}
          >
            MENSAL
          </div>
          <div
            className="ui button plan-btn"
            onClick={() => setActivePlan("yearly")}
          >
            ANUAL
          </div>
        </div>
      </div>

      <div
        className="ui vertically divided grid"
        style={{ width: "700px", margin: "40px auto" }}
      >
        <div className="two column row">
          <div className="column">
            <Visibility once onBottomVisible={() => setIsVisible(true)}>
              <Transition
                visible={isVisible}
                animation="fade up"
                duration={1000}
              >
                <div className="ui card" style={{ height: "430px" }}>
                  <div className="content">
                    <div className="meta pricing-title">BÁSICO</div>
                    <div className="header pricing-value-container">
                      <span className="pricing-value-coin">R$</span>
                      <span className="pricing-value">0</span>
                      <span className="pricing-value-type">/mês</span>
                    </div>
                    <div className="ui list">
                      <div className="item pricing-list-item">
                        <i className="check icon"></i>
                        <div className="content">
                          Resultado de 18 perfis por busca
                        </div>
                      </div>
                      <div className="item pricing-list-item">
                        <i className="check icon"></i>
                        <div className="content">
                          Busca no Instagram, Twitter, TikTok e Youtube
                        </div>
                      </div>
                      <div
                        className="item pricing-list-item"
                        style={{ color: "rgba(0, 0, 0, 0.5)" }}
                      >
                        <i className="times icon"></i>
                        <div
                          className="content"
                          style={{
                            textDecoration: "line-through",
                            textDecorationColor: "rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          Agendar pesquisas
                        </div>
                      </div>
                      <div
                        className="item pricing-list-item"
                        style={{ color: "rgba(0, 0, 0, 0.5)" }}
                      >
                        <i className="times icon"></i>
                        <div
                          className="content"
                          style={{
                            textDecoration: "line-through",
                            textDecorationColor: "rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          Favoritar pesquisas
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="ui primary button pricing-btn"
                    onClick={onRegister}
                  >
                    Começar agora
                  </button>
                  <div className="extra content">
                    <i className="credit card outline icon"></i>
                    <span style={{ fontSize: "13px" }}>
                      Não solicitamos informações do cartão de crédito
                    </span>
                  </div>
                </div>
              </Transition>
            </Visibility>
          </div>
          <div className="column">
            <Transition visible={isVisible} animation="fade up" duration={1000}>
              <div
                className="ui card"
                style={{ borderTop: "solid 4px #00DCA9", height: "430px" }}
              >
                <div className="content">
                  <div className="meta pricing-title">PRO</div>
                  <div className="header pricing-value-container">
                    <span className="pricing-value-coin">R$</span>
                    <span className="pricing-value">
                      {activePlan === "monthly" ? 19 : 15}
                    </span>
                    <span className="pricing-value-type">/mês</span>
                  </div>
                  <div className="ui list">
                    <div className="item pricing-list-item">
                      <i className="check icon"></i>
                      <div className="content">
                        Resultado de 45 perfis por busca
                      </div>
                    </div>
                    <div className="item pricing-list-item">
                      <i className="check icon"></i>
                      <div className="content">
                        Busca no Instagram, Twitter, TikTok e Youtube
                      </div>
                    </div>
                    <div className="item pricing-list-item">
                      <i className="check icon"></i>
                      <div className="content">Agendar pesquisas</div>
                    </div>
                    <div className="item pricing-list-item">
                      <i className="check icon"></i>
                      <div className="content">Favoritar pesquisas</div>
                    </div>
                  </div>
                </div>
                <button
                  className="ui primary button pricing-btn"
                  onClick={onRegister}
                >
                  Teste gratuitamente
                </button>
                <div className="extra content">
                  <i className="credit card outline icon"></i>
                  <span style={{ fontSize: "13px" }}>
                    Não solicitamos informações do cartão de crédito
                  </span>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

Plans.propTypes = {
  onRegister: PropTypes.func,
};

export default Plans;
