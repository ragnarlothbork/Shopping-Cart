import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Order from "./components/Order";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/cart" component={Cart} />
            <Route path="/home" component={Home} />
            <Route path="/order" component={Order} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
