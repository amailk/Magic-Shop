import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MagicItemList} from './components'

var items = require("./../db.json").items;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Magic Shop</h2>
        </div>
        <MagicItemList items={items}/>
      </div>
    );
  }
}

export default App;
