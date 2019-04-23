import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToolbarAndroid, Image, FlatList } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base'
class Peliculas extends Component {
    render() {
        return (
            <View style={[styles.Container]} >
            <Header style={{height:70, backgroundColor: 'black'}}>
                <View style={{ marginTop: 30, marginRight: 325 }}>
                        <Left>
                            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} style={{color:'white'}} />
                        </Left>
                </View>
            </Header>
                <View>
                
                </View>
            </View>
        )
    }
};
const styles = StyleSheet.create({

    Container: {
        flex: 1,
        //backgroundColor: '#616161',
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignSelf: 'stretch',
    }

})

export default Peliculas;