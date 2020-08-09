import React, { Component } from "react";
import axios from 'axios';

export default class Edit extends Component {
  constructor(props){
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeDob = this.onChangeDob.bind
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
