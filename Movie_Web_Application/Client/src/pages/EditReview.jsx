import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchReview, updateReview } from "../services/api";

export default function EditReview() {
  const { id } = useParams();
  const [form, setForm] = useState({ movie_id: "", review: "", rating: 5 });

  useEffect(()=> {
    const load = async () => {
      try {
        // const res = await fetchReview(id);
        // setForm(res.data);
        setForm({ movie_id: "1", review: "Sample review", rating: 4 });
      } catch (err) { console.error(err); }
    };
    load();
  }, [id]);

  const handle = (e) => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    try {
      // await updateReview(id, form);
      console.log("update", id, form);
      alert("Updated (placeholder)");
    } catch (err) {
      console.error(err);
      alert("Failed");
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: 520, marginTop: 24, padding: 20 }}>
        <h4 className="text-center">Edit Review</h4>
        <Form onSubmit={submit}>
          <Form.Group className="mb-2">
            <Form.Label>Movie ID</Form.Label>
            <Form.Control name="movie_id" value={form.movie_id} onChange={handle} disabled />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Review</Form.Label>
            <Form.Control as="textarea" name="review" rows={4} value={form.review} onChange={handle} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" min="1" max="5" name="rating" value={form.rating} onChange={handle} />
          </Form.Group>

          <Button type="submit" className="w-100">Save</Button>
        </Form>
      </Card>
    </Container>
  );
}
