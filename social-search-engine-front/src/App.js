import React from 'react';
import './App.css';
import { List, Image } from 'semantic-ui-react'

let mock = [{"nome":"Shop da Maquiagem","arroba":"@shop_da_maquiagem","link":"https://www.instagram.com/shop_da_maquiagem/?hl=pt-br","seguidores":"","seguindo":"","posts":"","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/53889238_292523341428671_8135769945368690688_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=Po8qn2Ir2gwAX-w7zyI&oh=68e78ac58ccdcfa1c1e16e467ae2953f&oe=5ED95146"}
,{"nome":"Maquiagem BR","arroba":"@maquiagem.br_","link":"https://www.instagram.com/maquiagem.br_/?hl=pt-br","seguidores":"478 mil seguidores","seguindo":"125 seguindo","posts":"1066 publicações ","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/92760093_2881808261896216_6131163735999381504_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=-Q522duuHwsAX8Q8MDl&oh=14c787f900594813548ff123cd4acd8e&oe=5ED92926"}
,{"nome":"Maquiagem para Iniciantes","arroba":"@maquiagem.iniciantes","link":"https://www.instagram.com/maquiagem.iniciantes/?hl=pt-br","seguidores":"","seguindo":"","posts":"","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/46404607_275746819790942_2517828215393746944_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=mYPGtNjSYQIAX_YHC9T&oh=86b81cab60c4f6432063e66ef09187b0&oe=5ED9621C"}
,{"nome":"Loja de Maquiagem em Recife","arroba":"Loja de Maquiagem em Recife (","link":"https://www.instagram.com/emporiomakeuprecife/","seguidores":"","seguindo":"","posts":"","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/39921968_286943728567133_146280762126106624_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=-CfLXxdK3-MAX_ydTgw&oh=7cf3611cace28f686ed39c8e8c36a7cb&oe=5ED8874D"}
,{"nome":"Loucas Por Maquiagem","arroba":"@loucaspormaquiagem","link":"https://www.instagram.com/loucaspormaquiagem/?hl=pt","seguidores":"410.3 mil seguidores","seguindo":"2250 seguindo","posts":"9853 publicações ","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/29416362_2054486881488916_3232420935617216512_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=8-pw0EreLYkAX9P7sJI&oh=e168368e98de8b60b075427a00d06cdd&oe=5ED927C4"}
,{"nome":"Tudo de Maquiagem Oficial","arroba":"@tudodemaquiagem","link":"https://www.instagram.com/tudodemaquiagem/?hl=pt-br","seguidores":"84.9 mil seguidores","seguindo":"57 seguindo","posts":"997 publicações ","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79720653_825047417923840_5235923866672431104_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=jV9YqTUiKbUAX8sbK0d&oh=4d8254020172148708c4206ca62d7471&oe=5EDA0FC9"}
,{"nome":"Jasmyne Maquiagens","arroba":"@jasmyne_oficial","link":"https://www.instagram.com/jasmyne_oficial/?hl=pt-br","seguidores":"126.2 mil seguidores","seguindo":"1300 seguindo","posts":"353 publicações ","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/51465060_756351614764979_5592428971401674752_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=u2mZn0UXKA0AX8hDNeF&oh=8fff1f3060caa15b3c7ef9f194b048d7&oe=5EDA2483"}
,{"nome":"ESPAÇO MAQUIAGEM®️","arroba":"@espacomaquiagem","link":"https://www.instagram.com/espacomaquiagem/?hl=pt","seguidores":"","seguindo":"","posts":"","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93111399_2620539764872073_2312922382332854272_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=jIQkSM8ZA3wAX-pb8OG&oh=becd246ca4e4f404227dc8abb8aa785c&oe=5ED76465"}
,{"nome":"Galeria de Maquiagem","arroba":"@galeriademaquiagem","link":"https://www.instagram.com/galeriademaquiagem/?hl=pt-br","seguidores":"15.4 mil seguidores","seguindo":"5035 seguindo","posts":"1652 publicações ","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/89451059_1397912893725269_7498352697918095360_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=ALzj3HQPMBUAX_Po5GL&oh=c76e03d10dfb561d87fff40d4a5ea087&oe=5ED75C5E"}
,{"nome":"Bem Mulher Maquiagem","arroba":"@bemmulhermaquiagem","link":"https://www.instagram.com/bemmulhermaquiagem/?hl=pt-br","seguidores":"","seguindo":"","posts":"","avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/88386336_195595448358011_545818192165994496_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=QnNv-YdWRt0AX8uJdsj&oh=d8e85f4350591446d4a3562dffa98aed&oe=5ED6EF35"}]

const ListExampleImage = () => (
  <List>
    <List.Item>
      <Image avatar src='/images/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>Rachel</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/lindsay.png' />
      <List.Content>
        <List.Header as='a'>Lindsay</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Bob's Burgers</b>
          </a>{' '}
          10 hours ago.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/matthew.png' />
      <List.Content>
        <List.Header as='a'>Matthew</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>The Godfather Part 2</b>
          </a>{' '}
          yesterday.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/jenny.jpg' />
      <List.Content>
        <List.Header as='a'>Jenny Hess</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Twin Peaks</b>
          </a>{' '}
          3 days ago.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/veronika.jpg' />
      <List.Content>
        <List.Header as='a'>Veronika Ossi</List.Header>
        <List.Description>Has not watched anything recently</List.Description>
      </List.Content>
    </List.Item>
  </List>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="..." style={{width: "370px"}}/>        
        <button>Buscar</button>
        {/*<button><img src="https://image.flaticon.com/icons/png/512/1384/1384060.png"/></button>*/}
        <ListExampleImage></ListExampleImage>
      </header>
    </div>
  );
}

export default App;
