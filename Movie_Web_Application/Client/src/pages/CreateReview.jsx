import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { createReview } from "../services/api";

export default function CreateReview() {
  const [form, setForm] = useState({ movie_id: "", review: "", rating: 5 });

  const handle = (e) => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    try {
      // await createReview(form);
      console.log("create review", form);
      alert("Review created (placeholder)");
    } catch (err) {
      console.error(err);
      alert("Failed");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: 520, marginTop: 24, padding: 20 }}>
        <h4 className="text-center">Create Review</h4>
        <Form onSubmit={submit}>
          <Form.Group className="mb-2">
            <Form.Label>Movie ID</Form.Label>
            <Form.Control name="movie_id" value={form.movie_id} onChange={handle} placeholder="Enter movie id" />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Review</Form.Label>
            <Form.Control as="textarea" name="review" rows={4} value={form.review} onChange={handle} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" min="1" max="5" name="rating" value={form.rating} onChange={handle} />
          </Form.Group>

          <Button type="submit" className="w-100">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
}
