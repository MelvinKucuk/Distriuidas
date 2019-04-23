import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToolbarAndroid, Image, FlatList } from 'react-native';

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={[styles.detalleContainer]} >
                 <Text>Series</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    detalleContainer: {
        flex: 1,
        backgroundColor: '#616161',
        backgroundColor: 'white',
        justifyContent: 'center',
        //alignSelf: 'stretch',
    }
})
export default Series;