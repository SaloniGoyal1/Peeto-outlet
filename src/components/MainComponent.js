import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';

class Main extends Component {

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Peeto Outlet</NavbarBrand>
          </div>
        </Navbar><br />
        <Menu />
      </div>
    );
  }
}

export default Main;