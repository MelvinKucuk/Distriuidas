var bodyParser = require('body-parser');
const fetch = require("node-fetch");
const url ="http://www.omdbapi.com/?apikey=";
const apiKEY="d0b64143";
var utils = require('../utils/Utils');
var omdb = require('omdb');
var movieData = require('../model/Pelicula');
var assert = require('assert');


let getPeliculasByTitle= (req,res) =>
{ 
    console.log('Buscando pelicula por titulo:  %s ',req.query.title);
    const idBusqueda = req.query.title;
    console.log('Titulo: %s ',idBusqueda);
    const endpoint = utils.getUrlByKey()+`&t=${idBusqueda}`; 
    console.log('URL: %s ',endpoint);
    fetch(endpoint)
    .then (
        (response) => {
            console.log('Response Api:',response);
            return response.json();
        }).then (responseData => {
            console.log('Mapeo json: ',responseData);           
            //movieData= new movieData(responseData);
            //console.log(movieData);
            const {Title,Genre,Actors,Language,Poster,imdbRating,imdbID,Website,Runtime,Year,Plot,Type}= responseData;
            const newData = {title:Title, genre:Genre,actors:Actors, language: Language, 
                poster: Poster,rating:imdbRating,movieId:imdbID,website:Website,
			runtime:Runtime,year:Year,synapsi:Plot,typeMovie:Type};
            console.log('Mapeo json:',newData);
            //res.send(movieData); //devuelvo resultado query
            res.status(200).send(newData);   
        }).catch((error) => {
            assert.ok('Error console',error);
            console.log('Error console',error);
            res.status(409).send({ msg: "Error:." + error});
          });
}

let getPeliculasAndSeriesById= (req,res) =>
{
   
    console.log('Buscando pelicula y series por id:',req.query.movieId)
    const endpoint = utils.getUrlByKey()+`&i=${req.query.movieId}`; 
    //const idBusqueda = req.query.movieId;
    //const endpoint = `${url}${apiKEY}&i=${idBusqueda}`; 
    console.log('URL: %s ',endpoint);
    fetch(endpoint)
    .then (
        (response) => {
            console.log(response);
            return response.json();
        }).then (responseData => {
            console.log('Mapeo json: ',responseData);  
            //movieData= new movieData(responseData);
            //console.log(movieData);
            const {Title,Genre,Actors,Language,Poster,imdbRating,imdbID,Website,Runtime,Year,Plot,Type}= responseData;
            const newData = {title:Title, genre:Genre,actors:Actors, language: Language, 
                poster: Poster,rating:imdbRating,movieId:imdbID,website:Website,
			runtime:Runtime,year:Year,synapsi:Plot,typeMovie:Type};
            console.log('Mapeo json:',newData);
            //res.send(movieData); //devuelvo resultado query
            res.status(200).send(newData);   
        }).catch((error) => {
            assert.ok('Promise error',error);
            console.log(error);
            res.status(409).send({ msg: "Error:." + error});
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
            //movieData= new movieData(responseData);
            //console.log(movieData);
            const {Title,Genre,Actors,Language,Poster,imdbRating,imdbID,Website,Runtime,Year,Plot,Type}= responseData;
            console.log("Mapeo json");
            const newData = {title:Title, genre:Genre,actors:Actors, language: Language, 
                poster: Poster,rating:imdbRating,movieId:imdbID,website:Website,
			runtime:Runtime,year:Year,synapsi:Plot,typeMovie:Type};
            console.log(newData);
            //res.send(movieData); //devuelvo resultado query
            res.status(200).send(newData);   
    }).catch((error) => {
        assert.ok('Promise error',error);
        console.log(error);
        res.status(409).send({ msg: "Error:." + error});
      });

}


let getPeliculasByKey= (req,res) =>
{
    
    console.log('Buscando pelicula por key:  %s ',req.query.key);
   // const endpoint = `${url}${apiKEY}&s=${req.query.key}`;
    const endpoint = utils.getUrlByKey()+`&type=movie&s=${req.query.key}`; 
    console.log('URL: %s ',endpoint);
    fetch(endpoint)
    .then (
        (response) => {
            //console.log(response);
            return response.json();
        }).then (responseData => {
            console.log("Cantidad de peliculas por key.",responseData.Search.length);;            
            console.log("Parsear Json to object.");
            var arrayMovie = [];
            for (var i = 0, len = responseData.Search.length; i < len; i++) {
                //const {Title,Year,imdbID,Type,Poster}= responseData.Search[i]; 
                const newData = {Title: responseData.Search[i].Title, Year: responseData.Search[i].Year,imdbID: responseData.Search[i].imdbID, Type: responseData.Search[i].Type, Poster: responseData.Search[i].Poster};
                //console.log(newData);
                arrayMovie.push(newData);
              }            
            res.status(200).send(arrayMovie); //devuelvo resultado query  
    }).catch((error) => {
        assert.ok('Promise error',error);
        console.log(error);
        res.status(409).send({ msg: "Error:." + error});
      });

}

let getSeriesByKey= (req,res) =>
{ 
    console.log('Buscando series por key:  %s ',req.query.key);
    const idBusqueda = req.query.key;
    console.log('Serie: %s ',idBusqueda);
    const endpoint = utils.getUrlByKey()+`&type=series&s=${idBusqueda}`; 
    console.log('URL: %s ',endpoint);
    fetch(endpoint)
    .then (
        (response) => {
            console.log('Response Api:',response);
            return response.json();
        }).then (responseData => {
            console.log('Mapeo json: ',responseData);           
            console.log("Cantidad de peliculas por key.");
            console.log(responseData.Search.length);            
            console.log("Parsear Json to object.");
            var arraySeries = [];
            for (var i = 0, len = responseData.Search.length; i < len; i++) {
                //const {Title,Year,imdbID,Type,Poster}= responseData.Search[i]; 
                const newData = {Title: responseData.Search[i].Title, Year: responseData.Search[i].Year,imdbID: responseData.Search[i].imdbID, Type: responseData.Search[i].Type, Poster: responseData.Search[i].Poster};
                //console.log(newData);
                arraySeries.push(newData);
            }
            res.status(200).send(arraySeries);
        }).catch((error) => {
            assert.ok('Error console',error);
            console.log('Error console',error);
            res.status(409).send({ msg: "Error:." + error});
          });
}


module.exports = {getPeliculasByTitle,getPeliculasByTitleAndYear,getPeliculasByKey,getPeliculasAndSeriesById,getSeriesByKey};