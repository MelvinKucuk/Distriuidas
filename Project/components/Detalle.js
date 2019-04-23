import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


const Detalle = ({ }) => {

    return (
        <View style={[styles.detalleContainer]} >
            <View style={[styles.buttonOuterLayout]}>
                <View>
                    <Button
                        title="Escuchar Cancion"
                        color="#841584"
                    ></Button>
                </View>
            </View>
        </View>
    );
};

function onPressLearnMore() {

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
        justifyContent: 'center'
    },
})

export default Detalle