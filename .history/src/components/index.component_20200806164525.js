import React, { Component } from "react";
import axios from 'axios';
import Tablerow from './tablerow';

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {cruddetails : []};
  }

  componentDidMount(){
    axios.get("http://localhost:4000/cruddetails").then(response =>{
      this.setState({cruddetails : response.data});
    })
    .catch(function (error){
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <p> Welcome to index Component</p>
      </div>
    );
  }
}
