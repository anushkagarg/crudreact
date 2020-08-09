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
              phone_number: response.data.phone_number,
              dob : response.data.dob
            });
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
    axios.post('http://localhost:4000/cruddetails/update'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));

        this.props.history.push('/index');
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Details</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Enter Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Enter Mail: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.mail}
                      onChange={this.onChangeMail}
                      />
                </div>
                <div className="form-group">
                    <label>Phone Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
  }
}
