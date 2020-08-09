import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import Create from './components'


class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>React CRUD Tutorial</h2>
      </div>
    );
  }
}

export default App;
