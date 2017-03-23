import React, { Component } from 'react';
import {Cart, Checkout, Home} from './components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      {/* navigation for testing */}
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

export default App;
