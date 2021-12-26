import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CountComp from "./CountComp";

function Home() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="text-primary">Trypanosome Cryobank Management System</h1>
      </div>

      <div className="container" style={{ marginTop: "50px", height: "68vh" }}>
        <div className="row">
          <div className="col">
            <Link to="/1">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQly1keJd5p2p8AcE3jGFpN0pUVxplnWfoYau3Bb4XrKlMjtMJb6rf40EH2hLBm3jInKhIfeVr_oqgQhxjxV6fD-iblOkwFsD7BBohFMd4l-RSrOpb2KkhfMA&usqp=CAE"
                alt=""
                //   width="50%"
                height="400px"
                marginTop="10px"
              />
              <Button
                variant="dark"
                style={{
                  // padding: "10%",
                  fontSize: "1.9rem",
                  // color: "black",
                  textDecorationLine: "none",
                }}>
                Liquid Nitrogen 1
              </Button>
            </Link>
          </div>
          <div className="col">
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQly1keJd5p2p8AcE3jGFpN0pUVxplnWfoYau3Bb4XrKlMjtMJb6rf40EH2hLBm3jInKhIfeVr_oqgQhxjxV6fD-iblOkwFsD7BBohFMd4l-RSrOpb2KkhfMA&usqp=CAE"
                alt=""
                //   width="50%"
                height="400px"
                marginTop="10px"
              />
              <Button
                variant="dark"
                style={{
                  // padding: "10%",
                  fontSize: "1.9rem",
                  // color: "black",
                  textDecorationLine: "none",
                }}>
                Liquid Nitrogen 2
              </Button>
            </Link>
          </div>
          <div className="col">
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQly1keJd5p2p8AcE3jGFpN0pUVxplnWfoYau3Bb4XrKlMjtMJb6rf40EH2hLBm3jInKhIfeVr_oqgQhxjxV6fD-iblOkwFsD7BBohFMd4l-RSrOpb2KkhfMA&usqp=CAE"
                alt=""
                //   width="50%"
                height="400px"
                marginTop="10px"
              />
              <Button
                variant="dark"
                style={{
                  // padding: "10%",
                  fontSize: "1.9rem",
                  // color: "black",
                  textDecorationLine: "none",
                }}>
                Liquid Nitrogen 3
              </Button>
            </Link>
          </div>
          <div className="col">
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQly1keJd5p2p8AcE3jGFpN0pUVxplnWfoYau3Bb4XrKlMjtMJb6rf40EH2hLBm3jInKhIfeVr_oqgQhxjxV6fD-iblOkwFsD7BBohFMd4l-RSrOpb2KkhfMA&usqp=CAE"
                alt=""
                //   width="50%"
                height="400px"
                marginTop="10px"
              />
              <Button
                variant="dark"
                style={{
                  // padding: "10%",
                  fontSize: "1.9rem",
                  // color: "black",
                  textDecorationLine: "none",
                }}>
                Liquid Nitrogen 4
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <CountComp />
    </>
  );
}

export default Home;
