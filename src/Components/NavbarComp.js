import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

function NavbarComp() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container fluid style={{ margin: "0% 10%" }}>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src="http://lims.icipe.org:8080/img/icipe-logo-web-200px-jpg.fead2257.jpg"
              alt=""
              height="40px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav.Link as={Link} to={"/"} className="text-white">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/1"} className="text-white">
                Samples
              </Nav.Link>
              <NavDropdown
                title={<span className="text-white">Resources</span>}
                id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">S.O.Ps</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Publications
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/data"} className="text-white">
                History
              </Nav.Link>
            </Nav>
            <Form className="d-flex" style={{ marginRight: "5%" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
            <i className="fas fa-user fa-lg text-white"></i>
            <NavDropdown
              title={<span className="text-white">User</span>}
              id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Register</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
