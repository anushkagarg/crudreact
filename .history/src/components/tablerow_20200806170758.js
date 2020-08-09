import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TableRow extends Component{

    render(){
        return(
          <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.mail}
          </td>
          <td>
            {this.props.obj.phone_number}
          </td>
          <td>
          {this.props.obj.dob}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
        )
    }
}
export default TableRow
