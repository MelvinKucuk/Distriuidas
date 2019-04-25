import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Image, FlatList, Linking, ActivityIndicator, Modal, TextInput, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import ApiController from '../controller/ApiController';

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

var { height, width } = Dimensions.get('window');

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
            modalVisible: false,
            text: "",
            idUser: props.navigation.getParam('idUser'),
        }
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
        console.log("so cra",this.state.idUser)
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    cargarComentario(){
        if (this.state.idUser != null && this.state.id != null && this.state.text != null){
            ApiController.createComment(this.state.idUser, this.state.id, this.state.text, this.okComentario.bind(this));
        }
    }

    okComentario(){
        alert("Se guardo tu comentario");
        this.setState({ modalVisible: false });
    }
    


    cargarDetalle() {
        let uri = `http://192.168.43.215:8080/apiAppPeliculas/getPeliculasAndSeriesById?movieId=${this.state.id}`
        console.log(uri);
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                this.setState({
                    detalle: data,
                    isLoading: false
                });
            }).catch((error) => console.log(error));
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
                    {console.log(this.state.detalle)}

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
                                        {/* <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                                            <Button
                                                onPress={() => Linking.openURL(this.state.detalle.webSite)}
                                                title="Homepage"
                                                color="#B3B6B7"
                                            />
                                        </View> */}
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
                    <TouchableOpacity onPress={() => {
                        this.setModalVisible(true);
                    }} style={styles.fab}>
                        <AntDesign name="form" size={25} color="white" />
                    </TouchableOpacity>

                    <Modal visible={this.state.isModalVisible} animationType="fade" visible={this.state.modalVisible} transparent={true} onRequestClose={() => { Alert.alert('Modal has been closed.'); }}>

                        <View style={styles.modal}>
                            <View>
                                <Text
                                    style={styles.modalText}>Comentario</Text>
                            </View>
                            <View style={{ margin: 10, color: 'white', borderColor: 'black', borderWidth: 1, width: width * 0.70, height: 50, backgroundColor: 'white' }}>
                                <TextInput multiline={true} autoFocus={true} maxLength={100} onChangeText={(text) => this.setState({ text })} value={this.state.text}>

                                </TextInput>
                            </View>
                            <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                <View style={{ marginRight: 10, width: width * 0.30 }}>
                                    <Button
                                        title="Aceptar"
                                        color="#B3B6B7"
                                        onPress={() => {
                                            this.cargarComentario();
                                        }} />
                                </View>
                                <View style={{ marginLeft: 10, width: width * 0.30 }}>
                                    <Button
                                        title="Cancelar"
                                        color="#B3B6B7"
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }} />
                                </View>
                            </View>


                        </View>
                    </Modal>
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modal: {
        height: height * 0.3,
        width: width * 0.75,
        position: 'absolute',
        top: height * 0.3,
        left: width * 0.13,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        shadowColor: 'black',
        shadowOpacity: 5.0,
    },
    modalText: {
        fontSize: 20,
        margin: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    textInput: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },

})

export default Detalle