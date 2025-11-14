import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "",
    password: "", mobile: "", birth: ""
  });

  const nav = useNavigate();

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    console.log("User registered:", form);

    nav("/signin");
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "32rem", padding: "25px" }}>
        <h3 className="text-center mb-3">Create Account</h3>

        <Form onSubmit={submit}>
          <Form.Group className="mb-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control name="first_name" onChange={handle} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="last_name" onChange={handle} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={handle} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={handle} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Mobile</Form.Label>
            <Form.Control name="mobile" onChange={handle} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="birth" onChange={handle} />
          </Form.Group>

          <Button type="submit" className="w-100" variant="success">
            Register
          </Button>
        </Form>

        <div className="text-center mt-3">
          Already have an account? <a href="/signin">Sign In</a>
        </div>
      </Card>
    </Container>
  );
}
