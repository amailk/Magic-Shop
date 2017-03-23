import React from 'react'
import logo from './logo.svg';
import './Home.css';
import { MagicItemList } from './MagicItemList'

var items = require("./../../db.json").items;

export const Home = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Magic Shop</h2>
    </div>
    <MagicItemList items={items}/>
  </div>
)
