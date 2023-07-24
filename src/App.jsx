import React from 'react'
import './index.css'
import { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import Heading from './components/Heading'
import Searchbar from './components/Searchbar'

const App = () => {
  const [ movies, setMovies ] = useState([])
  const [ searchValue, setSearchValue ] = useState('')

const getMovieRequest = async () => {
  const url = "http://www.omdbapi.com/?s=star_wars&apikey=3a32be45"

  const response = await fetch(url);
  const responseJson = await response.json();

  console.log(responseJson)
  setMovies(responseJson.Search);
}

useEffect(() => {
  getMovieRequest();
}, []);

  return (
    <div>
      <div className="flex justify-between m-3">
        <Heading heading="Movies" />
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="flex flex-row hidden:overflow-x-auto">
        <div className="flex-shrink-0">
          <MovieList movies = {movies} />
        </div>
      </div>
    </div>
  )
}

export default App
