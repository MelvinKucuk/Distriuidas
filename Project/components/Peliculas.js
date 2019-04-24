import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity } from 'react-native';

function createData(item, idArray) {
    return {
        key: item.imdbID,
        poster: item.Poster,
        title: item.Title,
        id: item.imdbID,
    };
}

class Peliculas extends Component {
    static navigationOptions = {
        title: 'Peliculas',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: 'white',
    };

    constructor(props) {
        super(props);

        this.state = {
            peliculas: [
                { key: '1', imagen: 'https://m.media-amazon.com/images/M/MV5BNWVjMzgwMTctZmZjNC00ZmE0LThiNTUtYzkyM2RkYWIzY2Y2XkEyXkFqcGdeQXVyNjEyNDAyMzI@._V1_SX300.jpg' },
                { key: '2', imagen: 'https://m.media-amazon.com/images/M/MV5BNWVjMzgwMTctZmZjNC00ZmE0LThiNTUtYzkyM2RkYWIzY2Y2XkEyXkFqcGdeQXVyNjEyNDAyMzI@._V1_SX300.jpg' },
            ]
        };
    }

    componentDidMount() {
        this.cargarPeliculas();
    }

    cargarPeliculas() {
        let uri = 'http://192.168.43.249:8080/apiAppPeliculas/getPeliculasByKey?key=saw'
        console.log(uri);
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                var i, newArray = [];
                for (i = 0; i < data.length; i++) {

                    newArray.push(createData(data[i], i));

                }
                this.setState({
                    peliculas: newArray
                });

            }).catch((err) => console.log(err));
    }


    render() {
        console.log("Entre al render");
        return (
            <View style={[styles.detalleContainer]} >
                <FlatList
                    style={{ flex: 1 }}
                    numColumns={2}
                    data={this.state.peliculas}
                    keyboardShouldPersistTaps='always'
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 1, margin: 10 }}
                            >
                            <TouchableOpacity
                                onPress = {() => this.props.onPress(item.id)}>
                                <Image style={[styles.imagen1]}
                                    source={{ uri: item.poster }}
                                ></Image>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />

            </View>
        )
    }

};

const styles = StyleSheet.create({
    buttonOuterLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    pos: {
        flex: 1
    },
    imagen1: {
        height: 180,
        width: 180,
        resizeMode: 'contain',
        borderRadius: 20,

    },

    toolBar: {
    },

    detalleContainer: {
        flex: 1,
        backgroundColor: '#616161',
        justifyContent: 'center',
    },
    outterImage: {
        
    }

})

export default Peliculas;