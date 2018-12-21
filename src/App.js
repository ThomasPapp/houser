import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './ducks/store';
import routes from './routes';

// header component
import Header from './components/Header/Header';

import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Header />
        <BrowserRouter>
          { routes }
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
