import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

function AddSample() {
  const [data, setData] = useState({
    canister: "",
    label: "",
    date: "",
    initials: "",
  });
  function handleSubmit(e) {
    axios
      .post("http://127.0.0.1:8000/", {
        canister: data.canister,
        label: data.label,
        date: data.date,
        initials: data.initials,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  return (
    <>
      <div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm="2">
              Canister
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
                id="canister"
                value={data.canister}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm="2">
              Label
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
                id="label"
                value={data.label}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm="2">
              Date
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
                id="date"
                value={data.date}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm="2">
              Initials
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
                id="initials"
                value={data.initials}
              />
            </Col>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: "10px" }}>
            Discard
          </Button>
        </Form>
      </div>
    </>
  );
}

function ModalForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Button
          variant="primary"
          className="btn btn-success"
          size="lg"
          onClick={handleShow}>
          Add New Sample
        </Button>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Add New Sample</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddSample />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalForm;
