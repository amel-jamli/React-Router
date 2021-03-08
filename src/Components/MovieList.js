import React from 'react';
import MovieCard from './MovieCard'

function MovieList({ movieList }) {
    return (
        <div className="listM" >
            <div
            >
                {movieList.map((el, i) => <MovieCard key={i} el={el} />)}
            </div>
        </div>
    )
}

export default MovieList
