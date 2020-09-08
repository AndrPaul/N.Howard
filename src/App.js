import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Price from "./pages/Price";
//Components
import Navbar from "./components/navbar/Navbar";
import "./sass/App.scss";
import { header } from "./headerData";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={header.length > 0 ? header[0].home.title : ""}
                subtitle={header.length > 0 ? header[0].home.subtitle : ""}
                class={header.length > 0 ? header[0].home.class : ""}
              />
            )}
          />
          <Route
            path="/about"
            render={() => (
              <About
                title={header.length > 0 ? header[0].about.title : ""}
                class={header.length > 0 ? header[0].about.class : ""}
              />
            )}
          />
          <Route
            path="/portfolio"
            render={() => (
              <About
                title={header.length > 0 ? header[0].portfolio.title : ""}
                class={header.length > 0 ? header[0].portfolio.class : ""}
              />
            )}
          />
          <Route
            path="/price"
            render={() => (
              <About
                title={header.length > 0 ? header[0].price.title : ""}
                class={header.length > 0 ? header[0].price.class : ""}
              />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <About
                title={header.length > 0 ? header[0].contact.title : ""}
                class={header.length > 0 ? header[0].contact.class : ""}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
