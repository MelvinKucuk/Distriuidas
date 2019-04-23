import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToolbarAndroid, Image, FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


class MyListItem extends React.PureComponent {
    render() {
        return (
            <View style={{ flex: 1, margin: 30}}>
            <TouchableOpacity
                onPress= {alert("puto")}>
                <Image style={[styles.imagen1]}
                    source={{uri: this.props.item.imagen}}
                ></Image>
                </TouchableOpacity>
            </View>
        )
    }
}


class Peliculas extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <View style={[styles.detalleContainer]} >
                <FlatList
                    style = {{flex: 1}}
                    numColumns = {2}
                    data={[{ key: '1', imagen: 'https://cdn-images-1.medium.com/max/1600/1*r9PKBnx_o5lxjDP0BMCCaw.png' }, 
                    { key: '2', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '3', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '4', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '5', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '6', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '7', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '8', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '9', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '10', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '11', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '12', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }, 
                    { key: '13', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }]}
                    renderItem= {({item, index}) =>{
                        return (
                            <MyListItem
                                item = {item}
                                index = {index}
                            ></MyListItem>
                        )
                    }}
                />
            </View>
        )
    }
};



const styles = StyleSheet.create({
    buttonOuterLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    pos: {
        flex: 1
    },
    imagen1: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },

    toolBar: {
    },

    detalleContainer: {
        flex: 1,
        backgroundColor: '#616161',
        justifyContent: 'center',
        //alignSelf: 'stretch',
    }

})

export default Peliculas;