import { useState } from 'react';
import './App.css';
import LinkList from './LinkList'
import Rate from './Rate'

function constructFakeLink() {
  let rating = Math.floor(Math.random() * 10)
  return {
    href: 'http://google.com/' + rating,
    rating: rating
  }
}

function App() {

  const [tab, setTab] = useState('user');

  const links = [
    constructFakeLink(),
    constructFakeLink(),
    constructFakeLink(),
    constructFakeLink(),
    constructFakeLink(),
    constructFakeLink(),
    constructFakeLink(),
    constructFakeLink(),
    constructFakeLink(),
    constructFakeLink(),
  ]


  return (
    <div className="App">
      <div className="rows">
        <div className="row">
          <span className="heading">RabbitHole</span>
        </div>
        <div className="row">
          <div className="buttons">
            <span 
            onClick={() => setTab('user')}
            className={`btn ${tab == 'user' ? 'active': ''}`}>User</span>
            <span 
            onClick={() => setTab('popular')}
            className={`btn ${tab == 'popular' ? 'active': ''}`}>Popular</span>
            <span 
            onClick={() => setTab('rate')}
            className={`btn ${tab == 'rate' ? 'active': ''}`}>Rate</span>
          </div>
          
        </div>
        <div className="row content">
          {tab == 'user' || tab == 'popular' ? 
            <LinkList rawLinks={links}/>

          : null}
          {tab == 'rate' ? <Rate/> : null}
        </div>
      </div>

    </div>
  );
}

export default App;
