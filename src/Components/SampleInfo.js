import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function SampleInfo() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Canister</th>
            <th>Name</th>
            <th>Date</th>
            <th>Initials</th>
            <th>Info</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>T.C IL3000</td>
            <td>22/03/2020</td>
            <td>CK, JB, DM</td>
            <Link to="#">
              <th>Info</th>
            </Link>
            <td>
              <span>
                <button className="btn btn-danger">Retrieve</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>T.C IL3000</td>
            <td>22/03/2020</td>
            <td>CK, JB, DM</td>
            <Link to="#">
              <th>Info</th>
            </Link>
            <td>
              <span>
                <button className="btn btn-danger">Retrieve</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>T.C IL3000</td>
            <td>22/03/2020</td>
            <td>CK, JB, DM</td>
            <Link to="#">
              <th>Info</th>
            </Link>
            <td>
              <span>
                <button className="btn btn-danger">Retrieve</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>T.C IL3000</td>
            <td>22/03/2020</td>
            <td>CK, JB, DM</td>
            <Link to="#">
              <th>Info</th>
            </Link>
            <td>
              <span>
                <button className="btn btn-danger">Retrieve</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>T.C IL3000</td>
            <td>22/03/2020</td>
            <td>CK, JB, DM</td>
            <Link to="#">
              <th>Info</th>
            </Link>
            <td>
              <span>
                <button className="btn btn-danger">Retrieve</button>
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>T.C IL3000</td>
            <td>22/03/2020</td>
            <td>CK, JB, DM</td>
            <Link to="#">
              <th>Info</th>
            </Link>
            <td>
              <span>
                <button className="btn btn-danger">Retrieve</button>
              </span>
            </td>
          </tr>
          <tr>
            <td colspan="6">
              <div className="d-grid gap-2">
                <button className="btn btn-success" size="lg">
                  Add Sample
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SampleInfo;
