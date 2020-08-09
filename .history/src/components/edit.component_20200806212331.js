import React, { Component } from "react";
import axios from 'axios';

export default class Edit extends Component {
  constructor(props){
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMail = this.onChangeBusinessName.bind(this);
    this.onChangetNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={

    }
  }
  render() {
    return (
      <div>
        <p> Welcome to edit Component</p>
      </div>
    );
  }
}
