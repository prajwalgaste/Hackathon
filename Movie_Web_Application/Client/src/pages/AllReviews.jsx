import React from "react";
import { Container, Card } from "react-bootstrap";

export default function AllReviews() {
  const all = [
    { id: 1, movie: "Bahubali", review: "Epic", rating: 5, user: "Ankit" }
  ];
  return (
    <Container>
      <h3 className="text-center mb-4">All Reviews</h3>
      {all.map(r => (
        <Card key={r.id} className="mb-3 p-3">
          <h5>{r.movie} — <small>{r.user}</small></h5>
          <p>{r.review}</p>
          <p>Rating: {r.rating}/5</p>
        </Card>
      ))}
    </Container>
  );
}
