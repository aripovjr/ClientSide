import React, { useState, useRef } from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import classes from "../styles/Dashboard.module.css";
import axios from "axios";

function CollectionForm({ user }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const collection = {
      name: name,
      topic: topic,
      description: description,
      authorName: user.name,
      authorRole: user.role,
    };

    try {
      // Send the collection data to the backend
      await axios.post("http://localhost:5001/collections", collection);
    } catch (error) {
      console.log("Error while sending collections", error);
    }

    // Clear the input fields
    setName("");
    setDescription("");
    setTopic("");
  };

  return (
    <Container className="m-5">
      <Card className={classes.dashboardCard}>
        <h2 className={classes.dashboardTitle}>Create Collection</h2>
        <Form onSubmit={handleSubmit} method="POST">
          <Row className="mb-5">
            <Form.Group as={Col} controlId="formName">
              <Form.Label column sm="3">
                Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formTopic">
              <Form.Label column sm="3">
                Topic
              </Form.Label>

              <Form.Control
                type="text"
                name="topic"
                value={topic}
                placeholder="Enter topic"
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default CollectionForm;
