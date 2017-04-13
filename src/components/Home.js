import React, { Component } from 'react'
import logo from './logo.svg';
import './Home.css';
import { MagicItemList } from './MagicItemList'

var items = require("./../../db.json").items;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {}
    }
  }


  addToCart = (id) => {
    if (this.state.cart[id]) {
      this.state.cart[id] += 1;
    } else {
      this.state.cart[id] = 1;
    }
    console.log(this.state);
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Magic Shop</h2>
        </div>
        <MagicItemList items={items} addItemCallback={this.addToCart}/>
      </div>
    );
  }
}
