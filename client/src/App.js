import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import UserManager from "./components/user-components/UserManager";
import AppHeader from "./components/AppHeader";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";

import HomeView from "./components/views/HomeView";
import ProductsView from "./components/views/ProductsView";
import ProductProfileView from "./components/views/ProductProfileView";
import DivisionsView from "./components/views/DivisionsView";
import AboutView from "./components/views/AboutView";
import ContactView from "./components/views/ContactView";
import QuoteCartView from "./components/views/QuoteCartView";
import ProjectManagerView from "./components/views/ProjectManagerView";
import UserAccountView from './components/views/UserAccountView';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserManager />
        <AppHeader />
        <AppNavbar />
        <Switch>
          <Route exact path = "/" component={ HomeView } />
          <Route path = "/products" component = { ProductsView } />
          <Route path = "/product/:productId" component = { ProductProfileView } />
          <Route path = "/divisions" component = { DivisionsView } />
          <Route path = "/about" component = { AboutView } />
          <Route path = "/contact" component = { ContactView } />
          <Route path = "/quote-cart" component = { QuoteCartView } />
          <Route path = "/project-manager" component = { ProjectManagerView } />
          <Route path = "/account" component = { UserAccountView } />
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default App;
