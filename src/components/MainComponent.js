import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <br />
        <Menu />
      </div>
    );
  }
}

export default Main;