import React from "react";
import { Container, Card } from "react-bootstrap";

export default function SharedReviews() {
  const shared = [
    { id: 1, movie: "3 Idiots", review: "Nice message", from: "Rohit" }
  ];
  return (
    <Container>
      <h3 className="text-center mb-4">Shared With Me</h3>
      {shared.map(s => (
        <Card key={s.id} className="mb-3 p-3">
          <h5>{s.movie} <small>— shared by {s.from}</small></h5>
          <p>{s.review}</p>
        </Card>
      ))}
    </Container>
  );
}
