import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ApiController from '../controller/ApiController';
import { AsyncStorage } from 'react-native';


class DatosPersonales extends Component {
    static navigationOptions = {
        title: 'Datos Personales',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: 'white',
    };
    constructor(props) {
        super(props);
        this.state = {
            idUser: null,
            nombre: null,
            apellido: null,
            email: null,
        };
        this._retrieveData();
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('idUser');
            if (value !== null) {
                this.setState({
                    idUser: value
                })
                this.getUserData(this.state.idUser);
            }
        } catch (error) {
            console.log(error);
        }
    };

    getUserData() {
        ApiController.getUsuario(this.okUserData.bind(this), this.state.idUser);
    }

    okUserData(data) {
        this.setState({
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,
        })
    }

    render() {
        return (
            <View style={[styles.detalleContainer]} >
                <View style={{ alignSelf: 'center', marginBottom: 50 }}>
                    <Image source={require('./vaca.png')} style={{
                        height: 180,
                        width: 180,
                        resizeMode: 'contain',
                        borderRadius: 20,
                    }} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <View style={[styles.underline]}>
                        <Text style={[styles.TextUnderline]}>Nombre:</Text>
                        <Text style={[styles.textInput]}>{this.state.nombre}</Text>
                    </View>
                    <View style={[styles.underline]}>
                        <Text style={[styles.TextUnderline]}>Apellido:</Text>
                        <Text style={[styles.textInput]}>{this.state.apellido}</Text>
                    </View>
                    <View style={[styles.underline]}>
                        <Text style={[styles.TextUnderline]}>E-Mail:</Text>
                        <Text style={[styles.textInput]}>{this.state.email}</Text>
                    </View>
                    <View style={[styles.underline]}>
                        <Text style={[styles.TextUnderline]}>Usuario:</Text>
                        <Text style={[styles.textInput]}>{this.state.idUser}</Text>
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    detalleContainer: {
        flex: 1,
        backgroundColor: '#616161',
        justifyContent: 'center',

    },
    textInput: {
        color: 'white',
        fontSize: 15,
        marginLeft: 20,
    },
    underline: {
        flexDirection: 'row',
    },
    TextUnderline: {
        textDecorationLine: 'underline',
        color: 'white',
        fontSize: 15,
        width: 60,
    }
})
export default DatosPersonales;