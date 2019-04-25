import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Button, Text } from 'react-native';
import { LinearGradient } from 'expo'
import { Actions } from 'react-native-router-flux';
import ApiController from '../controller/ApiController';
import { Row } from 'native-base';

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
        };
    }
    render() {
        return (
            <LinearGradient colors={['#584150', '#1e161b']} style={{ flex: 1 }}>
            <View style={[styles.detalleContainer]} >
                <View style={{ alignSelf: 'center', marginBottom: 50 }}>
                    <Image source={require('./vaca.png')} style={{
                        height: 180,
                        width: 180,
                        resizeMode: 'contain',
                        borderRadius: 20,
                    }} />
                </View>
                <View style={{alignSelf:'center'}}>
                    <View style={[styles.underline]}>
                        <Text style={[styles.TextUnderline]}>Nombre:</Text>
                        <Text style={[styles.textInput]}>Pedro</Text>
                    </View>
                    <View style={[styles.underline]}>
                        <Text style={[styles.TextUnderline]}>Apellido:</Text>
                        <Text style={[styles.textInput]}>GokuApellido</Text>
                    </View>
                    <View style={[styles.underline]}>
                        <Text style={[styles.TextUnderline]}>E-Mail:</Text>
                        <Text style={[styles.textInput]}>PedroGoku@gmail.com</Text>
                    </View>
                    <View style={[styles.underline]}>
                        <Text style={[styles.TextUnderline]}>Usuario:</Text>
                        <Text style={[styles.textInput]}> PedroRp</Text>
                    </View>
                </View>
            </View>
            </LinearGradient>
        )
    }
};

const styles = StyleSheet.create({
    detalleContainer: {
        flex: 1,
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
        width: 58,
    }
})
export default DatosPersonales;