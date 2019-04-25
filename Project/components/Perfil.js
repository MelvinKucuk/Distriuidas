import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToolbarAndroid, Image, FlatList } from 'react-native';

class Cuenta extends Component {
    static navigationOptions = {
        title: 'Perfil',
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
            <View style={[styles.detalleContainer]} >
                <Image source={require('./vaca.png')} style={{
                    height: 180,
                    width: 180,
                    resizeMode: 'contain',
                    borderRadius: 20, alignSelf: 'center', marginBottom: 250
                }} />
                <View style={{ flex: 1, alignContent: 'center' }}>
                    <Text>Pedro</Text>
                    <Text>GokuApellido</Text>
                    <Text>PedroGoku@gmail.com</Text>
                    <Text>PedroRp</Text>
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

    }
})
export default Cuenta;