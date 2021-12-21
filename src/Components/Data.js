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
    axios.get("http://127.0.0.1:8000/").then((res) => {
      console.log(res.data);
      this.setState({ samples: res.data });
    });
  }
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
                <td key={sample.id}>{sample.label}</td>
                <td>{sample.date}</td>
                <td>{sample.initials}</td>
                <Link to="#">
                  <th>Info</th>
                </Link>
                <td>
                  <span>
                    <button className="btn btn-danger">Retrieve</button>
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
