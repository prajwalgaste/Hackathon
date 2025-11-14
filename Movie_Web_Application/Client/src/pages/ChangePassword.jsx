import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

export default function ChangePassword() {
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const submit = (e) => { e.preventDefault(); console.log("change pwd", { oldPwd, newPwd }); alert("Changed (placeholder)"); };

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: 420, marginTop: 24, padding: 20 }}>
        <h4 className="text-center">Change Password</h4>
        <Form onSubmit={submit}>
          <Form.Group className="mb-2">
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" value={oldPwd} onChange={(e)=>setOldPwd(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" value={newPwd} onChange={(e)=>setNewPwd(e.target.value)} />
          </Form.Group>
          <Button type="submit" className="w-100">Update</Button>
        </Form>
      </Card>
    </Container>
  );
}
