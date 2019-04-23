import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';


class Detalle extends Component {
    render() {
        return (
            <View style={styles.detalleContainer}>
                <Text
                    style={styles.detalleText}
                    onPress={() => Actions.Peliculas()}
                >
                    Detalle Screen
               </Text>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    buttonOuterLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 100
    },
    detalleContainer: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    detalleText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    }

})

export default Detalle