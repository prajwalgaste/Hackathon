import React from "react";
import { Container, Card } from "react-bootstrap";

export default function MyReviews() {
  // In real app fetch /reviews/mine
  const my = [
    { id: 1, movie: "3 Idiots", review: "Lovely movie", rating: 5 },
    { id: 2, movie: "Dangal", review: "Powerful", rating: 5 },
  ];
  return (
    <Container>
      <h3 className="text-center mb-4">My Reviews</h3>
      {my.map(r => (
        <Card key={r.id} className="mb-3 p-3">
          <h5>{r.movie}</h5>
          <p>{r.review}</p>
          <p>Rating: {r.rating}/5</p>
        </Card>
      ))}
    </Container>
  );
}
