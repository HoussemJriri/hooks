import React, { useState } from "react";
import MovieList from "./folder/MovieList";
import MovieCard from "./folder/MovieCard";
import AddMovie from "./folder/AddMovie";
import Filter from "./folder/Filter";
import { BrowserRouter, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import MovieDetails from "./folder/moviedetails";
import MovieUl from "./folder/MovieUl";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path='/'component={MovieUl}></Route>
      <Route  path='/:id'component={MovieDetails}></Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
