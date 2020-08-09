import React, { Component } from "react";
import axios from 'axios';
//import Tablerow 

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {cruddetails : []};
  }

  componentDidMount(){
    axios.get("http://localhost:4000/cruddetails").then
  }
  render() {
    return (
      <div>
        <p> Welcome to index Component</p>
      </div>
    );
  }
}
