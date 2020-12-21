import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const MovieDescription = (props) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie(props.movies.filter((el) => el.id === props.match.params.id)[0]);
  });

  return (
    <div className="App">
      {movie && <h1 style={{ color: "#fff" }}>{movie.title}</h1>}
      {movie && (
        <p style={{ maxWidth: "770px", color: "#fff" }}>{movie.description}</p>
      )}

      {movie && (
        <iframe
          title="frame"
          width="560"
          height="315"
          src={movie.trailer}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ margin: "20px" }}
        ></iframe>
      )}

      <Link to="/">
        <Button variant="light" style={{ margin: "0px 0px 20px 0px" }}>
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default MovieDescription;
