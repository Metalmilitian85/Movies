import React from 'react'

const MovieList = (props) => {
    return (
        <div className="movie-app flex justify-start">
            {props.movies.map((movie, index) => <div className="m-3">
                <img className="hover:scale-105 duration-300 hover:cursor-pointer" src={movie.Poster} alt="movie"></img></div>)}
        </div>
    )
}

export default MovieList;