import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToolbarAndroid } from 'react-native';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={[styles.detalleContainer]} >
                <ToolbarAndroid
                    logo={require('')}
                    title="AwesomeApp"
                    actions={[{ title: 'Settings', icon: require(''), show: 'always' }]}
                    onActionSelec
                    ted={this.onActionSelected} />
            </View>
        )
    }
};

function onPressLearnMore() {

}

const styles = StyleSheet.create({
    buttonOuterLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    detalleContainer: {
        flex: 1,
        backgroundColor: '#616161',
        justifyContent: 'center',
        //alignSelf: 'stretch',
    }
})

export default Peliculas;