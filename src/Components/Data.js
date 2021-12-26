import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddSample from "./AddSample";

export class Data extends Component {
  state = {
    samples: [],
  };
  componentDidMount() {
    const url = "https://cryobank.herokuapp.com/";
    axios.get(url).then((res) => {
      console.log(res.data);
      this.setState({ samples: res.data });
    });
  }
  deleteSample = (ID) => {
    axios.delete(`${url}${ID}`).then((res) => {
      if (res.data != null) {
        alert("Sample retrieved succesfully");
        this.setState({
          samples: this.state.samples.filter((samples) => samples.id !== ID),
        });
      }
    });
  };
  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Canister</th>
              <th>Label</th>
              <th>Date</th>
              <th>Initials</th>
              <th>About</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.samples.map((sample) => (
              <tr>
                <td>{sample.canister}</td>
                <td>{sample.label}</td>
                <td>{sample.date}</td>
                <td>{sample.initials}</td>
                {/* <Link to="#">
                  <th>Info</th>
                </Link> */}
                <td>
                  <span>
                    <button
                      className="btn btn-danger"
                      onClick={this.deleteSample.bind(this, sample.id)}>
                      Retrieve
                    </button>
                  </span>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="6">
                <div className="d-grid gap-2">
                  <AddSample />
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Data;
