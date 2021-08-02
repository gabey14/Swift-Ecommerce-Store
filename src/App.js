import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import styled from 'styled-components'

//* Tag Template literals
// const Button = styled.button`
// 	background: green;
// 	color: white;
// `;

import {
  Home,
  SingleProducts,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/products/:id' children={<SingleProducts />} />
          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
