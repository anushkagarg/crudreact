import React, { Component } from "react";
import axios from 'axios';
//import Tablerow 

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {cruddetails : []};
  }
  render() {
    return (
      <div>
        <p> Welcome to index Component</p>
      </div>
    );
  }
}
