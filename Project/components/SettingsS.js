import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToolbarAndroid, Image, FlatList } from 'react-native';

class SettingsS extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={[styles.detalleContainer]} >
                 <Text h1 style={{justifyContent: 'center'}}>Settings</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    detalleContainer: {
        flex: 1,
        //backgroundColor: '#616161',
        backgroundColor: 'white',
        justifyContent: 'center',
        //alignSelf: 'stretch',
    }
})
export default SettingsS;