import React from 'react';
import './App.css';
import { List, Image } from 'semantic-ui-react'

let mock = [{"nome":"Shop da Maquiagem","arroba":"@shop_da_maquiagem","link":"https://www.instagram.com/shop_da_maquiagem/?hl=pt-br", "seguidores":"","seguindo":"","posts":"", "avatar":"https://instagram.ffor2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/53889238_292523341428671_8135769945368690688_n.jpg?_nc_ht=instagram.ffor2-1.fna.fbcdn.net&_nc_ohc=Po8qn2Ir2gwAX-w7zyI&oh=68e78ac58ccdcfa1c1e16e467ae2953f&oe=5ED95146"},]

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
