import React from "react";
import { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
//import MovieCard from "./Components/MovieCard";
import AddMovie from "./Components/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import MovieDescription from "./Components/MovieDescription";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Undisputed II: Last Man Standing",
      id: uuid(),
      date: 2006,
      genre: "Action",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1a/UndisputedIIposter.jpg",
      description:
        "After being framed for possessing drugs, George is sent to a Russian prison, where he realises that boxing against inmate Yuri Boyka is the only way out.",
      trailer: "https://www.youtube.com/embed/tV4EJytXgp4",
      rate: 5,
    },
    {
      title: "Undisputed III: Redemption",
      id: uuid(),
      date: 2010,
      genre: "Action",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/0/08/Undisputed_III_Redemption.jpg",
      description:
        "Boyka, a Russian inmate, injures his knee before the start of the new prison fighting tournament. Despite his weak knee, Boyka decides to compete with the best fighters to earn his freedom.",
      trailer: "https://www.youtube.com/embed/6u8IA35-vz8",
      rate: 5,
    },
    {
      title: "The Conjuring",
      id: uuid(),
      date: 2013,
      genre: "Horror",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg",
      description:
        "Summaries. Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. In 1971, Carolyn and Roger Perron move their family into a dilapidated Rhode Island farm house and soon strange things start happening around it with escalating nightmarish terror.",
      trailer: "https://www.youtube.com/embed/ejMMn0t58Lc",
      rate: 4,
    },
    {
      title: "The Expendables 3",
      id: uuid(),
      date: 2014,
      genre: "Action",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/5/55/Expendables_3_poster.jpg",
      description:
        "Barney assembles a new and younger team to capture Stonebanks, a co-founder of the Expendables. However, Stonebanks ends up capturing the new team and challenges an escaped Barney to save them.",
      trailer: "https://www.youtube.com/embed/4xD0junWlFc",
      rate: 4,
    },
    {
      title: "The Hangover",
      id: uuid(),
      date: 2009,
      genre: "Comedy",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg",
      description:
        "Doug and his three best men go to Las Vegas to celebrate his bachelor party. However, the three best men wake up the next day with a hangover and realise that Doug is missing.",
      trailer: "https://www.youtube.com/embed/tcdUhdOlz9M",
      rate: 4,
    },
    {
      title: "The Hangover Part II",
      id: uuid(),
      date: 2011,
      genre: "Comedy",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/9/9d/HangoverPart2MP2011.jpg",
      description:
        "After the bachelor party in Las Vegas two years ago, Phil, Stu, Alan, and Doug head to Thailand for Stu's wedding. However, things go awry when Stu's soon-to-be brother-in-law goes missing.",
      trailer: "https://www.youtube.com/embed/ohF5ZO_zOYU",
      rate: 3,
    },
  ]);

  const addMovie = (
    title,
    id,
    description,
    trailer,
    date,
    genre,
    poster,
    rate
  ) => {
    setMovies([
      ...movies,
      { title, id, description, trailer, date, genre, poster, rate },
    ]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AddMovie addMovies={addMovie} />
        <MovieList movies={movies} />
        <Route
          path="/movie/:id"
          render={(props) => <MovieDescription {...props} movies={movies} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
