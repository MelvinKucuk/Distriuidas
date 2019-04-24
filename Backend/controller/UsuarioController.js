var usuarios = require('../model/Usuario');
var bodyParser = require('body-parser');

 
let insertUsuario = (req,res) =>
{
    console.log(req.body);
    var newUsuario = usuarios({
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        email:req.body.email,
        usuarioId:req.body.usuarioId,
        password:req.body.password
    });
    newUsuario.save().
    then
    (
        (newUsuario)=>
        {
            res.send(newUsuario); //devuelvo resultado query 
        },
        (err)=>{console.log(err);}
    ) 
}

let getUsuarios = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    usuarios.find()
    .then
    (
        (listaUsuarios)=>
        {
            res.send(listaUsuarios); //devuelvo resultado query   
            //console.log(listaContactos);    
        },
        (err)=>{console.log(err);}
    )       
};

let getUsuarioById = (req, res) =>
{      
    console.log("llegue a leer con filtro");
    //Obtener id busqueda req.param.tagid
    console.log(req.query.usuarioId);
    let idBusqueda = {usuarioId: req.query.usuarioId};
    console.log(idBusqueda);
    //Listar resultados
    usuarios.find(idBusqueda)
    .then
    (
        (listaUsuarios)=>
        {
            console.log(listaUsuarios); 
            res.send(listaUsuarios); //devuelvo resultado query   
               
        },
        (err)=>{console.log(err);}
    )       
};

let updateUsuarioByPassword = (req, res) =>
{      
    console.log("Actualizar a leer con filtro");
    //Obtener id busqueda req.param.tagid
    console.log(req.body.usuarioId);
    var myquery = { usuarioId: req.body.usuarioId};
    console.log(req.body.password);
    var newvalues = { $set: {password: req.body.password } };
    //Listar resultados
    usuarios.updateMany(myquery, newvalues, function(err, res) {
        if (err) console.log(err);
        console.log("Documento actualizado");
        console.log(res.result.nModified);
      });    
      res.status(206).send({ msg: "Se actualizaron los usuarios." });  
};

module.exports = {getUsuarios,getUsuarioById,insertUsuario,updateUsuarioByPassword};