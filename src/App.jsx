import React from 'react'
import './index.css'
import { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import Heading from './components/Heading'
import Searchbar from './components/Searchbar'
import Favorites from './components/AddFavorites'
import RemoveFavorites from './components/RemoveFavorites'

const App = () => {
  const [ movies, setMovies ] = useState([])
  const [ favorites, setFavorites ] = useState([])
  const [ searchValue, setSearchValue ] = useState('')

const getMovieRequest = async (searchValue) => {
  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=3a32be45`;

  const response = await fetch(url);
  const responseJson = await response.json();

  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
}

useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);

const saveToLocalStorage = (items) => {
  localStorage.setItem('react-movie-app-favorites', JSON.stringify(items))
}

/*
useEffect(() => {
  const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites'))
  setFavorites(movieFavorites)
}, [])
*/

const addFavorite = (movie) => {
  const newFavorite = [...favorites, movie]
  setFavorites(newFavorite)
  saveToLocalStorage(newFavorite)
}

const removeFavoriteMovie = (movie) => {
  const newFavorite = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID)
  setFavorites(newFavorite)
  saveToLocalStorage(newFavorite)
}


  return (
    <div>
      <div className="flex justify-between m-3">
        <Heading heading="Movies" />
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="flex flex-row hidden:overflow-x-auto">
        <div className="flex-shrink-0">
          <MovieList 
            movies={movies} 
            handleFavorites={addFavorite} 
            Favorites={Favorites} 
          />
        </div>
      </div>
      <div className="flex justify-between m-3">
        <Heading heading="Favorites" />
      </div>
      <div className="flex flex-row hidden:overflow-x-auto">
        <div className="flex-shrink-0">
          <MovieList 
            movies={favorites} 
            handleFavorites={removeFavoriteMovie} 
            Favorites={RemoveFavorites} 
          />
        </div>
      </div>
    </div>
  )
}

export default App
