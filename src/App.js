import React from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Peeto Outlet</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <br />
            <Menu />
        </div>
    </div>
  );
}

export default App;
