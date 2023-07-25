import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import classes from "../styles/CollectionCard.module.css";

function Collection({ collections }) {
  return (
    <Container className="d-flex flex-wrap  ">
      {collections.map((item, id) => (
        <Card key={id} style={{ width: "290px", margin: "7px" }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.topic}
            </Card.Subtitle>
            <Card.Text>{item.description}</Card.Text>

            <div className="d-flex justify-content-between">
              <Card.Text className={classes.text}>
                {`by ${item.authorName} (${item.authorRole})`}
              </Card.Text>
              <Card.Text className={classes.text}>
                {item.createdAt.slice(0, 10)}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Collection;
