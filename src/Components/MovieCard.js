import React from "react";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <>
      <Card
        style={{ width: "18rem", backgroundColor: "#262626", margin: "10px" }}
        className="movieCardDiv"
      >
        <figure style={{ height: "424px", overflow: "hidden" }}>
          <Card.Img variant="top" src={movie.poster} className="MoviePic" />
        </figure>
        <Card.Body>
          <Card.Title style={{ color: "" }}>{movie.title}</Card.Title>
          <Card.Text style={{ color: "" }}>{movie.genre}</Card.Text>
          <div className="innerCard">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rate}
              emptyStarColor={"#fff"}
            />
            <br />
            <Link to={`/movie/${movie.id}`}>
              <Button variant="primary">Discover More</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
