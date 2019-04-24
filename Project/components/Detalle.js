import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, FlatList, Linking, ActivityIndicator } from 'react-native';
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';

var fakeData = [
    {
        "user": "Pepe",
        "comment": "La peli esta genial"
    },
    {
        "user": "Pepe",
        "comment": "La peli es mala"
    },
    {
        "user": "Pepe",
        "comment": "La peli es regular"
    },
    {
        "user": "Pepe",
        "comment": "no la veria"
    },
    {
        "user": "Pepe",
        "comment": "esta buenisima"
    },

];
class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.navigation.getParam('id'),
            detalle: {
                "title": "",
                "year": "",
                "synapsi": "",
                "poster": "",
                "genre": "",
                "rating": "",
                "runtime": "",
                "webSite": ""
            },
            isLoading: true,
        }
        console.log("ID: " + this.state.id);
    }

    static navigationOptions = {
        title: 'Detalle',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: 'white',
    };

    componentDidMount() {
        this.cargarDetalle();
    }

    cargarDetalle() {
        let uri = `http://192.168.43.249:8080/apiAppPeliculas/getPeliculasByMovieId?movieId=${this.state.id}`
        console.log(uri);
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                this.setState({
                    detalle: data,
                    isLoading: false
                });
            }).catch((err) => console.log(err));
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.detalleContainer}>
                    <ActivityIndicator size="large" color="#00ff00" backgroundColor=' #616161' style={{ flex: 1 }}></ActivityIndicator>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <TouchableOpacity onPress={onPressFab} style={styles.fab}>
                        <AntDesign name="form" size={25} color="white" />
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={styles.detalleContainer}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: 150, height: 250, marginLeft: 10, marginTop: 10, flex: 0.45, borderRadius: 10 }}
                                        source={{ uri: this.state.detalle.poster }} />
                                    <View style={{ flex: 0.55, flexDirection: 'column', alignContent: 'center', marginHorizontal: 10, marginTop: 20 }}>
                                        <Text style={styles.detalleTitle}>
                                            {this.state.detalle.title}
                                        </Text>
                                        <View
                                            style={{
                                                borderBottomColor: 'grey',
                                                borderBottomWidth: 1,
                                            }}
                                        />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={styles.detalleMovie}>
                                                {this.state.detalle.year}
                                            </Text>
                                            <Entypo name="calendar" size={15} color="white" />
                                        </View>
                                        <View
                                            style={{
                                                borderBottomColor: 'grey',
                                                borderBottomWidth: 1,
                                            }}
                                        />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={styles.detalleMovie}>
                                                {this.state.detalle.runtime}
                                            </Text>
                                            <Entypo name="clock" size={15} color="white" />
                                        </View>
                                        <View
                                            style={{
                                                borderBottomColor: 'grey',
                                                borderBottomWidth: 1,
                                            }}
                                        />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={styles.detalleMovie}>
                                                {this.state.detalle.rating}
                                            </Text>
                                            <FontAwesome name="star" size={15} color="white" />
                                        </View>
                                        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                                            <Button
                                                onPress={() => Linking.openURL(this.state.detalle.webSite)}
                                                title="Homepage"
                                                color="#B3B6B7"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.detalleGenresTitles}>
                                    Géneros
                                 </Text>
                                <Text style={styles.detalleGenres}>
                                    {this.state.detalle.genre}
                                </Text>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: 1,
                                    }}
                                />
                                <Text style={styles.detalleGenresTitles}>
                                    Resumen
                                 </Text>
                                <Text style={styles.detalleGenres}>
                                    {this.state.detalle.synapsi}
                                </Text>
                                <View
                                    style={{
                                        borderBottomColor: 'grey',
                                        borderBottomWidth: 1,
                                    }}
                                />
                                <Text style={styles.detalleGenresTitles}>
                                    Comentarios
                                </Text>
                                <FlatList
                                    data={fakeData}
                                    keyExtractor={(item, index) => 'key' + index}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <FlatListItems item={item} index={index}>

                                            </FlatListItems>
                                        );
                                    }}
                                >

                                </FlatList>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        }

    }

}

class FlatListItems extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                margin: 5,
                borderRadius: 10
            }}>
                <Text style={styles.FlatListItems}>
                    {this.props.item.user}
                </Text>
                <Text style={styles.FlatListItems}>
                    {this.props.item.comment}
                </Text>
            </View>
        );
    }
}



function onPressFab() {

}
function onPressHomepage() {

}




const styles = StyleSheet.create({
    detalleContainer: {
        flex: 1,
        backgroundColor: '#616161',

    },
    detalleComentario: {
        flex: 1,
        backgroundColor: 'white',
    },
    detalleTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    detalleMovie: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    },
    detalleGenres: {
        fontSize: 15,
        margin: 10,
        color: '#ffffff'
    },
    detalleGenresTitles: {
        fontSize: 17,
        margin: 10,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#B3B6B7',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    },
    FlatListItems: {
        color: 'black',
        padding: 10,
        fontSize: 16,
    }

})

export default Detalle