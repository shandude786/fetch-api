import React, { Component } from "react";
import "./App.css";
//import GIForm from "./Forms/GIForm";
//import CrudFormReact from "./Forms/CrudFormReact";

import FetchApi from "./components/FetchApi";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchApi />
      </div>
    );
  }
}
