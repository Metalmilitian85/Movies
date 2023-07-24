import React from 'react'

const MovieList = (props) => {
    return (
        <div className="movie-app flex justify-start">
            {props.movies.map((movie, index) => <div className="m-3">
                <img src={movie.Poster} alt="movie"></img></div>)}
        </div>
    )
}

export default MovieList;