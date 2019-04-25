import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import ApiController from '../controller/ApiController'
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from 'react-native';


function createData(item) {
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
            peliculas: [],
            nombre: 'america',
            idUser: props.navigation.getParam('idUser')
        };

        console.log("USER", this.state.idUser);
        this._storeData(this.state.idUser);
        this.obtenerPeliculas()

    }

    obtenerPeliculas() {
        ApiController.getPeliculas(this.okPeliculas.bind(this), this.state.nombre);

        console.log("jarinero", this.state.idUser);
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('idUser', this.state.idUser);
            console.log("Se guardo");
        } catch (error) {
            console.log(error);
        }
    };

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
        this._storeData(this.state.idUser);
    }

    render() {
        //console.log("Entre al render");
        return (
            <View style={[styles.detalleContainer]}>
                <ScrollView>
                    <View style={[styles.detalleContainer]} >
                        <View style={{ flexDirection: 'row' }}>
                            <View style={[styles.outterInput]}>
                                <TextInput
                                    style={[styles.textInput]}
                                    placeholder="Buscar por titulo"
                                    onChangeText={(text) => this.setState({ nombre: text })}
                                    onSubmitEditing={() => this.obtenerPeliculas()}
                                />
                            </View>
                            <View style={[styles.outterButton]}>
                                <Button
                                    title="Buscar"
                                    color='#373737'
                                    onPress={() => this.obtenerPeliculas()}
                                />
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
                                            onPress={() => this.props.onPress(item.id, this.state.idUser)}>
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
                </ScrollView>
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
        backgroundColor: '#373737',

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
    outterButton: {
        marginTop: 15,
        marginRight: 20,
        flex: 1,
        width: 60
    }

})

export default withNavigation(Peliculas);
