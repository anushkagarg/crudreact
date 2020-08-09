import React, { Component } from "react";
import axios from 'axios';

export default class Edit extends Component {
  constructor(props){
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      name: "",
      mail: "",
      phone_number: "",
      dob: " "
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/cruddetails/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              name: response.data.name, 
              mail: response.data.mail,
              phone_number: response.data.business_g_number });
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeMail(e) {
    this.setState({
      mail: e.target.value
    });
  }
  onChangePhone(e){
      this.setState({
          phone_number: e.target.value
      });
  }
  onChangeDob(e){
      this.setState({
          dob : e.target.value
      })
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.name},${this.state.mail}, and ${this.state.phone_number}`)

    const obj = {
      name: this.state.name,
      mail: this.state.mail,
      phone_number: this.state.phone_number,
      dob : this.state.dob
    };
    axios.post('http://localhost:4000/cruddetails/add', obj)
        .then(res => console.log(res.data));

    this.setState({
      name: " ",
      mail: " ",
      phone_number: " ",
      dob: " "
    });
  }
  render() {
    return (
      <div>
        <p> Welcome to edit Component</p>
      </div>
    );
  }
}
