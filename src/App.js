import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar, Grid, Row, Col } from 'react-bootstrap'
import ShoppingCart from './components/ShoppingCart'
import ProductList from './components/ProductList'
import store from './store'
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar inverse staticTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/#">Ecommerce</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>

          <Grid>
            <Row>
              <Col sm={8}>
                <ProductList />
              </Col>
              <Col sm={4}>
                <ShoppingCart />
              </Col>
            </Row>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
