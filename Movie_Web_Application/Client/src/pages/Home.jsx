import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const movies = [
  { title: "3 Idiots", release: "2009-12-25", img: "https://m.media-amazon.com/images/I/81x3QJkS23L.jpg" },
  { title: "Dangal", release: "2016-12-23", img: "https://m.media-amazon.com/images/I/81gCk0sRl-L.jpg" },
  { title: "Bahubali", release: "2015-07-10", img: "https://m.media-amazon.com/images/I/91v9EQ1ZCNL.jpg" },
];

const Home = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center">Movies</h2>
      <Row className="mt-4">
        {movies.map((m, i) => (
          <Col md={4} key={i}>
            <Card className="mb-4">
              <Card.Img src={m.img} height="350px" />
              <Card.Body className="text-center">
                <h5>{m.title}</h5>
                <p>Release: {m.release}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
