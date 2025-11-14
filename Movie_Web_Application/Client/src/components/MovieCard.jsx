import React from "react";
import { Card } from "react-bootstrap";

export default function MovieCard({ movie }) {
  return (
    <Card className="mb-3">
      {movie.img && <Card.Img variant="top" src={movie.img} style={{ height: 320, objectFit: "cover" }} />}
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        {movie.release && <Card.Text>Release: {movie.release}</Card.Text>}
      </Card.Body>
    </Card>
  );
}
