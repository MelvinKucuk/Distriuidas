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