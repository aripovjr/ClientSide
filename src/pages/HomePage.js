import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Collection from "../components/Collection";

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
      <h1 className="text-center my-3"> Collections</h1>
      <div>
        <Collection collections={collections} />
      </div>
    </Container>
  );
}

export default HomePage;
