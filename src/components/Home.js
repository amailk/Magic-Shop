import React, { Component } from 'react'
import logo from './logo.svg';
import './Home.css';
import { MagicItemList } from './MagicItemList'

var items = require("./../../db.json").items;

export class Home extends Component {

  state = {
    cart: []
  }

  render () {
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
