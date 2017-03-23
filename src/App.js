import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MagicItemList} from './components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

var items = require("./../db.json").items;

const BasicExample = () => (
  <Router>
    <div>
      // navigation for testing
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/checkout" component={Checkout}/>
    </div>
  </Router>
)

const Cart = () => (
  <div>
    <h2>Cart</h2>
  </div>
)

const Checkout = () => (
  <div>
    <h2>Checkout</h2>
  </div>
)


const Home = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Magic Shop</h2>
    </div>
    <MagicItemList items={items}/>
  </div>
)

export default BasicExample;
