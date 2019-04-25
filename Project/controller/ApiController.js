import { Component } from 'react';

class ApiController extends Component {

    getPeliculas(okPeliculas, nombre) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getPeliculasByKey?key=' + nombre
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => alert("Intentar de nuevo")).
            then(data => {
                okPeliculas(data);
            }).catch((err) => alert("Intentar de nuevo"));
    }

    getSeries(okSeries, nombre) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getSeriesByKey?key=' + nombre
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                okSeries(data);
            }).catch((err) => console.log(err));
    }

    insertUsuario(name, lastName, email, user, password, okCreate) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/insertUsuario/Usuario'
        fetch(uri, {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: name,
                apellido: lastName,
                email: email,
                usuarioId: user,
                password: password,})
            }).then((res) => {
                console.log("res1", res);
                return res.json();
            }).catch((err) => console.log(err)).then((res) => {
                okCreate();
            }).catch((err) => console.log(err))
        
    }

    changePassword(user, pass, okChange) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/updateUsuarioByPassword/Usuario'
        fetch(uri, {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuarioId: user, password: pass }),
        }).then((res) => {
            console.log("res1", res);
            return res.json();
        }).catch((err) => console.log(err)).then((res) => {
            okChange();
        }).catch((err) => console.log(err));
    }

    getUsuario(okUsuario, username) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getUsuarioById?usuarioId=' + username
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => {
            console.log(err)

        }).
            then(data => {
                okUsuario(data[0]);
            }).catch((err => {
                console.log(err);
                alert("No existe el usuario");
            }));
    }

    createComment(idUsuario, idPelicula, descripcion, okComentario){
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/insertComentario/Comentario'
        fetch(uri, {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                descripcion: descripcion, 
                usuarioId: idUsuario,
                peliculaId: idPelicula,
             }),
        }).then((res) => {
            console.log("res1", res);
            return res.json();
        }).catch((err) => console.log(err)).then((res) => {
            okComentario();
        }).catch((err) => console.log(err));
    }

}

export default new ApiController();