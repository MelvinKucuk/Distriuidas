import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import ApiController from '../controller/ApiController'
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo'

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
                { key: '1', poster: 'https://m.media-amazon.com/images/M/MV5BNWVjMzgwMTctZmZjNC00ZmE0LThiNTUtYzkyM2RkYWIzY2Y2XkEyXkFqcGdeQXVyNjEyNDAyMzI@._V1_SX300.jpg', title: "Saw" },
                { key: '2', poster: 'https://m.media-amazon.com/images/M/MV5BNWVjMzgwMTctZmZjNC00ZmE0LThiNTUtYzkyM2RkYWIzY2Y2XkEyXkFqcGdeQXVyNjEyNDAyMzI@._V1_SX300.jpg', title: "Saw" },
            ],
            nombre: null,
        };
    }

    obtenerPeliculas() {
        ApiController.getPeliculas(this.okPeliculas.bind(this), this.state.nombre);
    }

    okPeliculas(data) {
        if (data != null) {
            var i, newArray = [];
            for (i = 0; i < data.length; i++) {
                newArray.push(createData(data[i], i));
            }
            this.setState({ peliculas: newArray });
        } else {
            alert("Intentar de nuevo")
        }
    }


    render() {
        //console.log("Entre al render");
        return (
            <LinearGradient colors={['#584150', '#1e161b']} style={{ flex: 1 }}>
                <View style={[styles.detalleContainer]} >
                    <View style={{ flexDirection: 'row', backgroundColor: '#373737' }}>
                        <View style={[styles.outterInput]}>
                            <TextInput
                                style={[styles.textInput]}
                                placeholder="Buscar por titulo"
                                onChangeText={(text) => this.setState({ nombre: text })}
                                onSubmitEditing={() => this.obtenerPeliculas()}
                            />
                        </View>
                        <View style={[styles.outterButton]}>
                            <TouchableOpacity
                                style={styles.SubmitButtonStyle}
                                activeOpacity={.5}
                                onPress={() => this.obtenerPeliculas()}>
                                <Text style={styles.textButton}> Buscar </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
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
                                        onPress={() => this.props.onPress(item.id)}>
                                        <Image style={[styles.imagen1]}
                                            source={{ uri: item.poster }}
                                        ></Image>
                                        <Text style={[styles.texto]}
                                        >{item.title}</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />

                </View>
            </LinearGradient>
        );
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
        justifyContent: 'center',
    },
    texto: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center'
    },
    outterInput: {
        flex: 3,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginHorizontal: 30,
        marginBottom: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    textInput: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },

    SubmitButtonStyle: {
        width: 70,
        marginTop: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 0,
        marginRight: 20,
        backgroundColor: '#373737',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#fff'
    },
    textButton: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },

})

export default Peliculas;