import React from 'react'
import MovieList from './MovieList'


function Filter({ movieList, newRate, newTitle }) {



    return (newRate === "" && newTitle === "") ? <MovieList movieList={movieList} /> :
        (newRate !== "" && newTitle === "") ? (<MovieList movieList={movieList.filter(el => el.rate === newRate)} />) :
            (newRate === "" && newTitle !== "") ? (<MovieList movieList={movieList.filter(el => ((el.title).toUpperCase()).includes((newTitle).toUpperCase()))} />) :
            <MovieList movieList={movieList.filter(el => ((el.title).toUpperCase(el)).includes((newTitle).toUpperCase()) && el.rate === newRate)
            } />

}

export default Filter
