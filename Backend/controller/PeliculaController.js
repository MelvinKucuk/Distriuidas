var bodyParser = require('body-parser');
const fetch = require("node-fetch");
const url ="http://www.omdbapi.com/?apikey=";
const apiKEY="d0b64143";
var utils = require('../utils/Utils');
var omdb = require('omdb');
var movieDataId = require('../model/Pelicula');
var movieData = require('../model/Pelicula');
var movieDataTitle = require('../model/Pelicula');


let getPeliculasByTitle= (req,res) =>
{
   
    console.log("Buscando pelicula por titulo")
    console.log(req.query.title);
    const idBusqueda = req.query.title;
    const endpoint = `${url}${apiKEY}&t=${idBusqueda}`;
    console.log(endpoint);
    const endpoint1 = utils.getUrlByKey; 
    console.log(endpoint1);
    fetch(endpoint)
    .then (
        (response) => {
            console.log(response);
            return response.json();
        }).then (responseData => {
            console.log(responseData);
            console.log("Parsear Json to object");
            const newData = {title: responseData.Title, genre: responseData.Genre,actors: responseData.Actors, language: responseData.Language, 
                poster: responseData.Poster,rating:responseData.imdbRating,movieId:responseData.imdbID,website:responseData.Website,
			runtime:responseData.Runtime,Year:responseData.Year,synapsi:responseData.Plot,typeMovie:responseData.Type};
            //movieDataTitle = new movieData(responseData);
            //console.log(movieDataTitle);
            //const {Title,Actors,Genre,Language,Poster,imdbRating,imdbID,Website,Runtime,Year,Plot}= responseData;
            //const newData = {Title: Title, Genre: Genre,Actors: Actors, Language: Language, 
            //    Poster: Poster,imdbRating:imdbRating,imdbID:imdbID,Website:Website,Runtime:Runtime,Year:Year,Plot:Plot};
            //console.log(newData);
            res.send(newData); //devuelvo resultado query  
        });
}

let getPeliculasByMovieId= (req,res) =>
{
   
    console.log("Buscando pelicula por titulo")
    console.log(req.query.movieId);
    const idBusqueda = req.query.movieId;
    const endpoint = `${url}${apiKEY}&i=${idBusqueda}`;
    console.log(endpoint);
    fetch(endpoint)
    .then (
        (response) => {
            console.log(response);
            return response.json();
        }).then (responseData => {
            console.log(responseData);
            
            console.log("Parsear Json to object");
            movieDataId = new movieData(responseData);
            console.log(movieDataId);
            //const {Title,Actors,Genre,Language,Poster,imdbRating,imdbID,Website,Runtime,Year,Plot}= responseData;
            //const newData = {Title: Title, Genre: Genre,Actors: Actors, Language: Language, 
            //    Poster: Poster,imdbRating:imdbRating,imdbID:imdbID,Website:Website,Runtime:Runtime,Year:Year,Plot:Plot};
            //console.log(newData);
            res.send(movieDataId); //devuelvo resultado query  
        });
}


let getPeliculasByTitleAndYear= (req,res) =>
{
    
    console.log("Buscando pelicula por titulo y anio")
    const endpoint = `${url}${apiKEY}&t=${req.query.title}&y=${req.query.year}`;
    console.log(endpoint);
    fetch(endpoint)
    .then (
        (response) => {
            console.log(response);
            return response.json();
        }).then (responseData => {
            console.log(responseData);
            
            console.log("Parsear Json to object");
            movieData = new movieData(responseData);
            console.log(movieData);
            //const {Title,Actors,Genre,Language,Poster,Website}= responseData;
            //const newData = {Title: Title, Genre: Genre,Actors: Actors, Language: Language, Poster: Poster,Website: Website};
            //console.log(newData);
            res.send(movieData); //devuelvo resultado query  
    });

}


let getPeliculasByKey= (req,res) =>
{
    
    console.log("Buscando pelicula por key")
    const endpoint = `${url}${apiKEY}&s=${req.query.key}`;
    console.log(endpoint);
    fetch(endpoint)
    .then (
        (response) => {
            //console.log(response);
            return response.json();
        }).then (responseData => {
            console.log("Cantidad de peliculas por key.");
            console.log(responseData.Search.length);            
            console.log("Parsear Json to object.");
            var arrayMovie = [];
            for (var i = 0, len = responseData.Search.length; i < len; i++) {
                //const {Title,Year,imdbID,Type,Poster}= responseData.Search[i]; 
                const newData = {Title: responseData.Search[i].Title, Year: responseData.Search[i].Year,imdbID: responseData.Search[i].imdbID, Type: responseData.Search[i].Type, Poster: responseData.Search[i].Poster};
                //console.log(newData);
                arrayMovie.push(newData);
              }            
            res.send(arrayMovie); //devuelvo resultado query  
    });

}

let getPeliculasByKey1= (req,res) =>
{
    
    console.log("Buscando1")
    console.log(req.query.title);
    const idBusqueda = req.query.title;
    omdb.get({ title: idBusqueda, year: 2004 }, true, function(err, movie) {
        if(err) {
            return console.error(err);
        }
     
        if(!movie) {
            return console.log('Movie not found!');
        }
        console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
        console.log(movie);
        console.log(movie.plot);
        res.send(movie); //devuelvo resultado query  
    });

}


module.exports = {getPeliculasByTitle,getPeliculasByTitleAndYear,getPeliculasByKey,getPeliculasByMovieId};