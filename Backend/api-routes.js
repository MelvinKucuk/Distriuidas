// Initialize express router
let router = require('express').Router();
let usuarioController = require('./controller/UsuarioController');
let comentarioController = require('./controller/ComentarioController');
let peliculaController = require('./controller/PeliculaController');
       
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'Estoy Funcionando',
       message: 'Se esta ejecutando la Api!',
    });
});

//EndPoint para leer toda la base de usuarios
router.get('/getUsuarios',function(req,res)
{
    console.log("getUsuarios");
    usuarioController.getUsuarios(req,res);
});
//EndPoint para leer usuario por id
router.get('/getUsuarioById',function(req,res)
{
    console.log("getUsuarioById con filtro");
    usuarioController.getUsuarioById(req,res);
});
//Endpoint de insert un usuarios
router.post('/insertUsuario/Usuario',function(req,res)
{
    console.log("Insertar nuevo usuario: " + req.body);
    usuarioController.insertUsuario(req,res);
});

//EndPoint para insertar votacion
router.post('/insertComentario/Comentario',function(req,res)
{
    console.log("Insertar nuevo comentatrio: " + req.body);
    comentarioController.insertComentario(req,res);
});

//EndPoint para leer comentartios de un usuarios
router.get('/getComentariosByUsuario',function(req,res)
{
    console.log(req.body);
    comentarioController.getComentariosByUsuarioId(req,res);
});

//EndPoint para buscar pelicula por titulo.
router.get('/getPeliculasByTitle',function(req,res)
{
    console.log(req.body);
    peliculaController.getPeliculasByTitle(req,res);
});
   
//EndPoint para buscar pelicula por titulo y anio.
router.get('/getPeliculasByTitleAndYear',function(req,res)
{
    console.log(req);
    if(typeof req.query.title !== 'undefined' && typeof req.query.year !== 'undefined') {
        console.log(req.query.title);
        console.log(req.query.year);
        peliculaController.getPeliculasByTitleAndYear(req,res);
    }else{
        res.status(400).send({ msg: "Parametros invalidos." });
    }    
});

//EndPoint para buscar pelicula por titulo y anio.
router.get('/getPeliculasByKey',function(req,res)
{
    console.log(req);
    if(typeof req.query.key !== 'undefined') {
        console.log(req.query.key);
        peliculaController.getPeliculasByKey(req,res);
    }else{
        res.status(400).send({ msg: "Parametros no ingresado o invalidos." });
    }    
});
// Export API routes
module.exports = router;