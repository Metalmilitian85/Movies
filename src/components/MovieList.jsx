import React from 'react'

const MovieList = (props) => {
    const AddFavorites = props.Favorites
    return (
        <div className="movie-app">
          <div className="flex justify-start relative">
            {props.movies.map((movie, index) => 
              <div className="image-container m-3">
                <img className="duration-300 hover:cursor-pointer h-[100%] w-[100%]" src={movie.Poster} alt="movie"></img>
                <div className="overlay" onClick={() => props.handleFavorites(movie)}>
                    <AddFavorites />
                </div>
              </div>
            )}
          </div>
        </div>
    )
}

export default MovieList;