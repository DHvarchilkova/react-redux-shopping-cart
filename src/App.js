import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import logo from './logo.svg';
import './App.css';
import './components/Navbar';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
  