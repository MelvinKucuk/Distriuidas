import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import ApiController from '../controller/ApiController'
import {AsyncStorage} from 'react-native';

function createData(item, idArray) {
    return {
        key: item.imdbID,
        poster: item.Poster,
        title: item.Title,
        id: item.imdbID,
    };
}

class Series extends Component {
    static navigationOptions = {
        title: 'Series',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: 'white',
    };

    constructor(props) {
        super(props);

        this.state = {
            series: [
                { key: '1', poster: 'https://m.media-amazon.com/images/M/MV5BNWVjMzgwMTctZmZjNC00ZmE0LThiNTUtYzkyM2RkYWIzY2Y2XkEyXkFqcGdeQXVyNjEyNDAyMzI@._V1_SX300.jpg', title: "Saw" },
                { key: '2', poster: 'https://m.media-amazon.com/images/M/MV5BNWVjMzgwMTctZmZjNC00ZmE0LThiNTUtYzkyM2RkYWIzY2Y2XkEyXkFqcGdeQXVyNjEyNDAyMzI@._V1_SX300.jpg', title: "Saw" },
            ],
            nombre: null,
            idUser: null,
        };
        this._retrieveData();
    }


    obtenerSeries() {
        ApiController.getSeries(this.okSeries.bind(this), this.state.nombre);

       

    }

    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('idUs');
          if (value !== null) {
            this.setState ({
                idUser: value
            })
          }
        } catch (error) {
            console.log(error);
        }
      };

    okSeries(data) {
        var i, newArray = [];
        for (i = 0; i < data.length; i++) {
            newArray.push(createData(data[i], i));
        }
        this.setState({ series: newArray });
    }


    render() {
        return (
            <View style={[styles.detalleContainer]}>
                <ScrollView>
                    <View style={[styles.detalleContainer]} >
                        <View style={{ flexDirection: 'row', backgroundColor: '#373737' }}>
                            <View style={[styles.outterInput]}>
                                <TextInput
                                    style={[styles.textInput]}
                                    placeholder="Buscar por titulo"
                                    onChangeText={(text) => this.setState({ nombre: text })}
                                    autoFocus={true}
                                    onSubmitEditing={() => this.obtenerSeries()}
                                />
                            </View>
                            <View style={[styles.outterButton]}>
                                <Button
                                    title="Buscar"
                                    color='#373737'
                                    onPress={() => this.obtenerSeries()}
                                />
                            </View>
                        </View>
                        <FlatList
                            style={{ flex: 1 }}
                            numColumns={2}
                            data={this.state.series}
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
    }

})

export default Series;