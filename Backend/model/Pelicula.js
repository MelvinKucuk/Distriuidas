// Constructor & Properties Object (Using option A)
var MovieData = function(Response){

    // Constructor
    if ( Response.Title )
      var title = Response.Title;
    else
      var title = 'Not Available';
  
    if ( Response.Actors )
      var actors = Response.Actors;
    else
      var actors = 'Not Available';
    
    if ( Response.Genre )
      var genre = Response.Genre;
    else
      var genre = 'Not Available';
    
    if ( Response.Language )
        var language = Response.Language;
    else
        var language = 'Not Available';
  
    if ( Response.Poster )
        var poster = Response.Poster;
    else
        var poster = 'Not Available';
  
    if ( Response.imdbRating )
        var rating = Response.imdbRating;
    else
        var rating = 'Not Available';

    if ( Response.imdbID )
        var movieId = Response.imdbID;
    else
        var movieId = 'Not Available';
    
    if ( Response.Website )
        var webSite = Response.Website;
    else
        var webSite = 'Not Available';
    
    if ( Response.Runtime )
        var runtime = Response.Runtime;
    else
        var runtime = 'Not Available';
    
    if ( Response.Year )
        var year = Response.Year;
    else
        var year = 'Not Available';
    
    if ( Response.Plot )
        var synapsi = Response.Plot;
    else
        var synapsi = 'Not Available';

    if ( Response.Type )
        var typeMovie = Response.Type;
    else
        var typeMovie = 'Not Available';

    // Return properties
    return {
      title: title,
      actors: actors,
      genre: genre,
      language: language,
      poster: poster,
      rating: rating,
      movieId: movieId,
      webSite: webSite,
      runtime: runtime,
      year: year,
      synapsi: synapsi,
      typeMovie:typeMovie
    };
  
  };

  module.exports = MovieData;