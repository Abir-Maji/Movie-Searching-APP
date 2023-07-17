import { useState } from "react";
import { Search } from "./components/Search";
import { MovieCard } from "./components/MovieCard";

const apiKey = "afdc4dff";
const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}`;

export const App = () => {
  const [keyword, setKeyword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (title) => {
    if (title != "") {
      const response = await fetch(`${apiURL}&s=${title}`);
      const data = await response.json();
      if (data.Response !== "False") {
        setErrorMsg("");
        setMovies(data.Search);
      } else {
        setErrorMsg("No Movies Found");
        setMovies([]);
      }
    } else {
      setErrorMsg("Please Enter Something");
      setMovies([]);
    }
  };
  const handleClick = () => {
    searchMovie(keyword);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchMovie(keyword);
    }
  };
  return (
    <div className="container">
      <h1>React Movie App</h1>
      <p>
        Your one-stop destination to get the details about your favourite
        movies, cartoons, animes, TV shows etc. Use the search bar and you're
        good to go. Enjoy!
      </p>
      <Search
        userInput={keyword}
        handleChange={(e) => setKeyword(e.target.value)}
        handleClick={handleClick}
        handleKeyDown={handleKeyDown}
      />
      <div className="error">
        <p>{errorMsg}</p>
      </div>
      <div className="result">
        {movies.map(movie => {
          return <MovieCard key={movie.imdbID} movieData={movie} />
        })}
      </div>
    </div>
  );
};
