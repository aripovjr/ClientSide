import React, { useState, useRef } from "react";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import classes from "../styles/Dashboard.module.css";
import axios from "axios";
import DragAndDrop from "./DragAndDrop";
import { BiCloudUpload } from "react-icons/bi";

function CollectionForm({ user }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", files);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("topic", topic);
    formData.append("authorName", user.name);
    formData.append("authorRole", user.role);

    // Send the collection data to the backend
    axios
      .post("http://localhost:5001/collection", formData)
      .then((response) => {
        console.log("Collection created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating collection:", error);
        // Handle the error appropriately
      });

    // Clear the input fields
    setName("");
    setDescription("");
    setTopic("");
    setFiles(null);
    console.log(formData);
  };

  const handlerDragOver = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    setFiles(event.dataTransfer.files);
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

          {/* <Form.Group className="mb-5" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <div>
              {!files ? (
                <div
                  className={classes.dropzone}
                  onDragOver={handlerDragOver}
                  onDrop={handleDrop}
                >
                  <p>Drag and Drop image to Upload</p>
                  <input
                    type="file"
                    multiple
                    onChange={(event) => setFiles(event.target.files)}
                    hidden
                    ref={inputRef}
                  />
                  <BiCloudUpload className={classes.uploadIcon} />
                  <Button onClick={() => inputRef.current.click()}>
                    Select Image
                  </Button>
                </div>
              ) : (
                <div className={classes.dropzone}>
                  <ul>
                    {Array.from(files).map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Form.Group> */}

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
