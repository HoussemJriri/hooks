import React, { useState } from "react";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import Filter from "./Filter";
import {BrowserRouter , Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import MovieDetails from'./moviedetails';
import {movies} from './data'

function MovieUl() {
  const [movieList, setMovieList] = useState(movies);
  const [addedMovie, setAddedMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
  });
  const [movieTitle, setMovieTitle] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  const handleFilterRatingChange = (ratingFilter) =>
    setMovieRating(ratingFilter);
  const handleFilterTitleChange = (titleFilter) => setMovieTitle(titleFilter);

  return (
    <div className="App">
     { console.log(movieList)}
      <Filter
        onUpdateTitle={handleFilterTitleChange}
        onUpdateRating={handleFilterRatingChange}
      />
      <AddMovie
        onSave={setMovieList}
        onUpdateAdd={setAddedMovie}
        inputs={addedMovie}
        list={movieList}
      />
      
      <MovieList
        list={movieList.filter(
          (el) =>
            el.title.toUpperCase().includes(movieTitle.toUpperCase().trim()) &&
            el.rating >= movieRating
        )}
        
      />
      
    
    </div>
  );
}

export default MovieUl;
