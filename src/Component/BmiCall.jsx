import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function BmiCall() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (height && weight) {
      const bmiValue = (weight / ((height * height) / 10000)).toFixed(2);
      setBmValue(bmiValue);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">BMI Calculator</h1>
      <Form onSubmit={handleSubmit} className="p-3 bg-light shadow-sm">
        <Row>
          <Col xs={12} sm={6}>
            <Form.Group controlId="height">
              <Form.Label>Height in CM:</Form.Label>
              <Form.Control
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height in cm"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="weight">
              <Form.Label>Weight in KG:</Form.Label>
              <Form.Control
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight in kg"
              />
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" variant="primary" block>
          Calculate
        </Button>
      </Form>
      {bmi && (
        <Alert variant="info" className="mt-4 text-center">
          <h2>Your BMI: {bmi}</h2>
          <p>Underweight = less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = greater than 24.9</p>
        </Alert>
      )}
    </Container>
  );
}

export default BmiCall;
