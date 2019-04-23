import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToolbarAndroid, Image, FlatList } from 'react-native';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={[styles.detalleContainer]} >
                <View style={[styles.toolBar]}>
                    <ToolbarAndroid
                        logo={require('./tijeras.png')}
                        title="AwesomeApp"
                        actions={[{ title: 'Settings', icon: require('./tijeras.png'), show: 'always' }]}
                        onActionSelec
                        ted={this.onActionSelected} />
                </View>
                <View>
                    <Image style={[styles.imagen1]}
                        source={require('./tijeras.png')} />
                </View>
                <View style={[styles.pos]}>
                <FlatList
                    data={[
                        { key: './tijeras.png' },
                        { key: './vaca.png' },
                      
                    ]}
                    renderItem={({ item }) => <Image style={styles.item}
                                                    FowardRef= {item.key}></Image>}
                />
                </View>
            </View>
        )
    }
};
function onActionSelected() {
    if (position === 0) { // index of 'Settings'
        showSettings();
    }
}
function onPressLearnMore() {

}

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
        //backgroundColor: '#616161',
        backgroundColor: 'white',
        justifyContent: 'center',
        //alignSelf: 'stretch',
    }

})

export default Peliculas;