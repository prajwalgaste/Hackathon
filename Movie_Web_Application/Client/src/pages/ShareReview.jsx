import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { shareReview } from "../services/api";

export default function ShareReview() {
  const [form, setForm] = useState({ review_id: "", user_id: "" });
  const handle = (e) => setForm({...form, [e.target.name]: e.target.value});
  const submit = async (e) => {
    e.preventDefault();
    try {
      // await shareReview(form);
      console.log("share", form);
      alert("Shared (placeholder)");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: 420, marginTop: 24, padding: 20 }}>
        <h4 className="text-center">Share Review</h4>
        <Form onSubmit={submit}>
          <Form.Group className="mb-2">
            <Form.Label>Review ID</Form.Label>
            <Form.Control name="review_id" value={form.review_id} onChange={handle} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User ID (share with)</Form.Label>
            <Form.Control name="user_id" value={form.user_id} onChange={handle} />
          </Form.Group>
          <Button type="submit" className="w-100">Share</Button>
        </Form>
      </Card>
    </Container>
  );
}
