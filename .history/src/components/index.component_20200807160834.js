import React, { Component } from "react";
import axios from "axios";
import TableRow from "./"

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { cruddetails: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/cruddetails")
      .then((response) => {
        this.setState({ cruddetails: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.cruddetails.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3 align="center">Details List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>MailId</th>
              <th>Phone Number</th>
              <th>Date Of Birth</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
