var bodyParser = require('body-parser');
const fetch = require("node-fetch");
const url ="http://www.omdbapi.com/?i=tt3896198&apikey=";
const apiKEY="d0b64143";
var omdb = require('omdb');


let getPeliculasByTitle= (req,res) =>
{
   
    console.log("Buscando pelicula por titulo")
    console.log(req.query.title);
    const idBusqueda = req.query.title;
    const endpoint = `${url}${apiKEY}&t=${idBusqueda}`;
    console.log(endpoint);
    fetch(endpoint)
    .then (
        (response) => {
            console.log(response);
            return response.json();
        }).then (responseData => {
            console.log(responseData);
            
            console.log("Entre");
            const {Title,Actors,Genre,Language,Poster,imdbRating,imdbID}= responseData;
            const newData = {Title: Title, Genre: Genre,Actors: Actors, Language: Language, Poster: Poster,imdbRating:imdbRating,imdbID:imdbID};
            console.log(newData);
            res.send(newData); //devuelvo resultado query  
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
            
            console.log("Entre");
            const {Title,Actors,Genre,Language,Poster,Website}= responseData;
            const newData = {Title: Title, Genre: Genre,Actors: Actors, Language: Language, Poster: Poster,Website: Website};
            console.log(newData);
            res.send(newData); //devuelvo resultado query  
    });

}


let getPeliculasByTitle1= (req,res) =>
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


module.exports = {getPeliculasByTitle,getPeliculasByTitleAndYear};