import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Img from './bloc_jams_logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
            <div className="head">
              <div className="App-Logo"><Link to='/'><img src={Img} className="App-logo" alt="Bloc Jams logo" /></Link></div>
              <div className="hero-title"><h1 className="hero-title">Turn the music up!</h1></div>
              <div className="nav"><nav>
                <ul>
                  <li><Link to='/'>Landing</Link></li>
                  <li><Link to='/library'>Library</Link></li>
                </ul>
              </nav></div>
            </div>
          </header>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
          </main>
      </div>
    );
  }
}

export default App;
