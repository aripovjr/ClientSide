import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function HomePage() {
  const [collections, setCollections] = useState([]);
  const fetchCollections = () => {
    axios
      .get("http://localhost:5001/getCollections")
      .then((response) => {
        setCollections(response.data);
      })
      .catch((error) => {
        console.error("Error fetching collections:", error);
      });
  };
  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <Container>
      <h1> Collections</h1>
      {collections.map((collection) => (
        <div key={collection.id}>
          <h4>Name: {collection.name}</h4>
          <p>Author Name: {collection.authorName}</p>
          <p>Author Role: {collection.authorRole}</p>
          <p>Description: {collection.description}</p>
          <p>Topic: {collection.topic}</p>
        </div>
      ))}
    </Container>
  );
}

export default HomePage;
