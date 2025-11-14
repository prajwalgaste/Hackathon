import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function AppNavbar() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    nav("/signin");
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/home">Movie Reviews</Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/all-reviews">All Reviews</Nav.Link>
            <Nav.Link as={Link} to="/my-reviews">My Reviews</Nav.Link>
            <Nav.Link as={Link} to="/shared-reviews">Shared With Me</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/create-review">Create Review</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
