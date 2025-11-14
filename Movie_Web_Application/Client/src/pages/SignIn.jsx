import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    // Normally check from server
    localStorage.setItem("auth", "true");
    
    nav("/home");
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "32rem", padding: "25px" }}>
        <h3 className="text-center mb-3">Sign In</h3>

        <Form onSubmit={submit}>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>

          <Button type="submit" className="w-100" variant="success">Login</Button>
        </Form>

        <div className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </Card>
    </Container>
  );
}
