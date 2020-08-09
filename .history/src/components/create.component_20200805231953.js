import React, { Component } from "react";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      mail: "",
      phone_number: "",
      dob: " "
    };
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
          dob = e.target.value
      })
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      name: " ",
      mail: " ",
      phone_number: " ",
      dob: " "
    });
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Enter Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Enter Mail-id: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.mail}
              onChange={this.onChangeMail}
            />
          </div>
          <div className="form-group">
            <label>Enter Phone Number: </label>
            <input type="text" className="form-control" 
            value = {this.state.phone_number}
            onChange ={this.onChangePhone}
            />
          </div>
          <div className="form-group">
            <label>Enter DateOfBirth: </label>
            <input type="text" className="form-control" 
            value = {this.state.dob}
            onChange ={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
