import React from "react";
import './App.css';
import SearchIcon from './search.svg'
import { useState,useEffect } from "react";
import MovieCard from "./MovieCard";
// omdbapi key:  eb5431b0

const API_URL = 'http://www.omdbapi.com?apikey=eb5431b0';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItems, setSearchItems] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  

  useEffect(() => {
    searchMovies('Ronaldo');
  }, [])

  // const movie1 = {
  //   "Title": "The Amazing Spiderman 2 Webb Cut",
  //   "Year": "2021",
  //   "imdbID": "tt18351128",
  //   "Type": "movie",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
  // };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies" value={searchItems} onChange={(e) => {setSearchItems(e.target.value) }} />
        <img src={SearchIcon} alt="Search" onClick={() => {searchMovies(searchItems)}} />
      </div>
      {
        movies?.length > 0 ? (<div className="container">
        {movies.map((movie)=>{return(
          <MovieCard movie={movie}/>
        )})}
      </div>):(
        <div className="empty">
          <h3>Nothing to display</h3>
        </div>
      )
      }

      
    </div>
  );
}

export default App;
