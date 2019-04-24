import { Component } from 'react';

class ApiController extends Component {

    getPeliculas(okPeliculas, nombre) {
        let uri = 'http://192.168.43.249:8080/apiAppPeliculas/getPeliculasByKey?key='+nombre
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => alert("Intentar de nuevo")).
            then(data => {
                okPeliculas(data);
            }).catch((err) => alert("Intentar de nuevo"));
    }

    getSeries(okSeries, nombre) {
        let uri = 'http://192.168.43.215:8080/apiAppPeliculas/getSeriesByKey?key='+nombre
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                okSeries(data);
            }).catch((err) => console.log(err));
    }
}

export default new ApiController();