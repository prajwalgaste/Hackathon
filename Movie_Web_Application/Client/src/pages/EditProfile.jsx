import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

export default function EditProfile() {
  const [form, setForm] = useState({
    first_name: "Demo", last_name: "User", email: "demo@example.com", mobile: "", birth: ""
  });
  const handle = (e) => setForm({...form, [e.target.name]: e.target.value});
  const submit = (e) => { e.preventDefault(); console.log("save profile", form); alert("Saved (placeholder)"); };

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: 520, marginTop: 24, padding: 20 }}>
        <h4 className="text-center">Edit Profile</h4>
        <Form onSubmit={submit}>
          <Form.Group className="mb-2">
            <Form.Label>First name</Form.Label>
            <Form.Control name="first_name" value={form.first_name} onChange={handle} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Last name</Form.Label>
            <Form.Control name="last_name" value={form.last_name} onChange={handle} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={form.email} disabled />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Mobile</Form.Label>
            <Form.Control name="mobile" value={form.mobile} onChange={handle} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Birth</Form.Label>
            <Form.Control type="date" name="birth" value={form.birth} onChange={handle} />
          </Form.Group>
          <Button type="submit" className="w-100">Save</Button>
        </Form>
      </Card>
    </Container>
  );
}
