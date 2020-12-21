import React from "react";
//import Form from "react-bootstrap";
import { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import MovieCard from "./MovieCard";

function MovieList(props) {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const movieFilter = props.movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase().trim()) &&
      movie.rate >= rating
    );
  });
  const clear = () => setRating(0);

  return (
    <>
      <div className="search">
        <input
          className="lookingforamovie"
          type="text"
          placeholder="Looking for a movie?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <StarRatingComponent
          startCount={5}
          value={rating}
          onStarClick={(e) => setRating(e)}
          emptyStarColor={"#fff"}
        />
        <button className="clear" onClick={clear}>
          Clear
        </button>
      </div>
      <div className="movieList">
        {movieFilter.map((el) => (
          <MovieCard movie={el} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
