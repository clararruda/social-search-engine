import React, { Component } from 'react';
import './App.css';
import { List, Image, Checkbox, Input } from 'semantic-ui-react'

let mock = [{ "nome": "Shop da Maquiagem", "arroba": "@shop_da_maquiagem", "link": "https://www.instagram.com/shop_da_maquiagem/?hl=pt-br", "seguidores": "", "seguindo": "", "posts": "", "avatar": "https://react.semantic-ui.com/images/avatar/small/daniel.jpg" }
  , { "nome": "Maquiagem para Iniciantes", "arroba": "@maquiagem.iniciantes", "link": "https://www.instagram.com/maquiagem.iniciantes/?hl=pt-br", "seguidores": "", "seguindo": "", "posts": "", "avatar": "https://react.semantic-ui.com/images/avatar/large/rachel.png" }
  , { "nome": "Loucas Por Maquiagem", "arroba": "@loucaspormaquiagem", "link": "https://www.instagram.com/loucaspormaquiagem/?hl=pt", "seguidores": "410.3 mil seguidores", "seguindo": "2250 seguindo", "posts": "9853 publicações ", "avatar": "https://react.semantic-ui.com/images/avatar/small/stevie.jpg" }
  , { "nome": "Tudo de Maquiagem Oficial", "arroba": "@tudodemaquiagem", "link": "https://www.instagram.com/tudodemaquiagem/?hl=pt-br", "seguidores": "84.9 mil seguidores", "seguindo": "57 seguindo", "posts": "997 publicações ", "avatar": "https://react.semantic-ui.com/images/avatar/small/christian.jpg" }
  , { "nome": "Jasmyne Maquiagens", "arroba": "@jasmyne_oficial", "link": "https://www.instagram.com/jasmyne_oficial/?hl=pt-br", "seguidores": "126.2 mil seguidores", "seguindo": "1300 seguindo", "posts": "353 publicações ", "avatar": "https://react.semantic-ui.com/images/avatar/small/jenny.jpg" }
  , { "nome": "ESPAÇO MAQUIAGEM®️", "arroba": "@espacomaquiagem", "link": "https://www.instagram.com/espacomaquiagem/?hl=pt", "seguidores": "", "seguindo": "", "posts": "", "avatar": "https://react.semantic-ui.com/images/avatar/small/veronika.jpg" }
  , { "nome": "Galeria de Maquiagem", "arroba": "@galeriademaquiagem", "link": "https://www.instagram.com/galeriademaquiagem/?hl=pt-br", "seguidores": "15.4 mil seguidores", "seguindo": "5035 seguindo", "posts": "1652 publicações ", "avatar": "https://react.semantic-ui.com/images/avatar/small/lindsay.png" }
  , { "nome": "Bem Mulher Maquiagem", "arroba": "@bemmulhermaquiagem", "link": "https://www.instagram.com/bemmulhermaquiagem/?hl=pt-br", "seguidores": "", "seguindo": "", "posts": "", "avatar": "https://react.semantic-ui.com/images/avatar/small/matthew.png" }]


class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="ui secondary pointing menu">
          <a class="logo item">
            Social Search Engine
          </a>
          <div class="right menu">
            <a class="ui item">
              Logout
            </a>
          </div>
        </div>
        <header className="App-header">

          <div className="checkboxes" style={{ padding: 30 }}>
            <Checkbox id='ckb-instagram' label='Instagram' defaultChecked />
            <Checkbox id='ckb-youtube' label='Youtube' defaultChecked />
            <Checkbox id='ckb-twitter' label='Twitter' defaultChecked /> 
          </div>
          <label id="pesquisa">
            <Input size='small' icon='search' placeholder='Search...' />
          </label>
          <ul>
            {mock.map((mock, indice) => {
              return (
                <List.Item key={mock.arroba}>
                  <Image avatar src={mock.avatar} />
                  {mock.arroba}
                </List.Item>
              )
            }
            )}
          </ul>
        </header>
      </div>
    );
  }
}
export default App;
