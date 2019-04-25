var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var comentarioSchema = new Schema({
    nombre:String,
    descripcion:String,
    usuarioId:String,
    fechaComentario:String,
    peliculaId:String,
    peliculaNombre:String,
});

var Comentarios = mongoose.model('Comentario', comentarioSchema);
console.log("se creo modelo Comentarios");
module.exports = Comentarios;