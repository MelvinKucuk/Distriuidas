import { Component } from 'react';

class ApiController extends Component {

    getPeliculas(okPeliculas) {
        let uri = 'http://192.168.43.249:8080/apiAppPeliculas/getPeliculasByKey?key=jorge'
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                okPeliculas(data);
            }).catch((err) => console.log(err));
    }

    getSeries(okSeries) {
        let uri = 'http://192.168.43.249:8080/apiAppPeliculas/getPeliculasByKey?key=saw'
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                okPeliculas(data);
            }).catch((err) => console.log(err));
    }
}

export default new ApiController();