import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToolbarAndroid, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MyListItem extends React.PureComponent {


    render() {
        return (
            <View style={{ flex: 1, margin: 30 }}
                >
                <TouchableOpacity
                    onPress = {console.log("puto")}>
                    <Image style={[styles.imagen1]}
                        source={{ uri: this.props.item.imagen }}
                    ></Image>
                    </TouchableOpacity>
            </View>
        )
    }
}


import { View, Text, StyleSheet, Button, ToolbarAndroid, Image, FlatList } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base'
class Peliculas extends Component {
    static navigationOptions = {
        title: 'Peliculas',
      };

    constructor(props) {
        super(props);
        
        this.state = {
                 };
    }

    componentDidMount(){
        let uri = '192.168.43.249:8080/apiAppPeliculas/getPeliculasByKey?key=saw'
        console.log(uri);
        fetch(uri).then(res => res.json()).
        then(json => {
            json.array.forEach(element => {
                
            });
            console.log(json.Poster)
            console.log(json.Title)
            console.log(json.imdbID)
        }).catch((err)=> console.log(err));
    }


    /*
    { key: '1', imagen: 'https://cdn-images-1.medium.com/max/1600/1*r9PKBnx_o5lxjDP0BMCCaw.png' },
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
                    
    */ 

    render() {
        return (
            <View style={[styles.detalleContainer]} >
                <FlatList
                    style={{ flex: 1 }}
                    numColumns={2}
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
                    { key: '13', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' }]} renderItem={({ item, index }) => {
                        return (
                            <MyListItem
                                item={item}
                                index={index}
                            ></MyListItem>
                        )
                    }}
                />
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
function onActionSelected() {
    if (position === 0) { // index of 'Settings'
        showSettings();
    }
}
function onPressLearnMore() {

}

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: '#616161',
        justifyContent: 'center',
        //alignSelf: 'stretch',
    }

})

export default Peliculas;