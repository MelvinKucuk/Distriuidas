import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToolbarAndroid, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Left, Right, Icon } from 'native-base'

class MyListItem extends React.PureComponent {
    render() {
        return (
            <View style={{ flex: 1, margin: 30 }}
            >
                <Image style={[styles.imagen1]}
                    source={{ uri: this.props.item.poster }}
                ></Image>
                <Button style={[styles.button]}
                    color='#373737'
                    title="Login"
                    onPress={alert("PUTO")}
                />
            </View>
        )
    }
}



function createData(item, idArray) {
    return {
        key: item.imdbID,
        poster: item.Poster,
        title: item.Title
    };
}



class Peliculas extends Component {
    static navigationOptions = {
        title: 'Peliculas',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: 'white',
    };

    constructor(props) {
        super(props);

        this.state = {
            peliculas: [
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
                { key: '13', imagen: 'https://cdn-images-1.medium.com/max/1600/1*TZAwFAf2oSJGoQBuVIbOvQ.png' },
            ]
        };
    }

    componentDidMount() {
        this.cargarPeliculas();
    }

    cargarPeliculas() {
        let uri = 'http://192.168.43.249:8080/apiAppPeliculas/getPeliculasByKey?key=saw'
        console.log(uri);
        fetch(uri).then(res => {
            return res.json()
        }).catch((err) => console.log(err)).
            then(data => {
                var i, newArray = [];
                for (i = 0; i < data.length; i++) {

                    newArray.push(createData(data[i], i));

                }
                this.setState({
                    peliculas: newArray
                });

            }).catch((err) => console.log(err));
    }


    render() {
        console.log("Entre al render");
        return (
            <View style={[styles.detalleContainer]} >
                <FlatList
                    style={{ flex: 1 }}
                    numColumns={2}
                    data={this.state.peliculas}
                    keyboardShouldPersistTaps='always'
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 1, margin: 10 }}
                            >
                            <TouchableOpacity
                                onPress = {() => this.submithandler()}>
                                <Image style={[styles.imagen1]}
                                    source={{ uri: item.poster }}
                                ></Image>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />

            </View>
        )
    }


    submithandler(){
        console.log("asd")
    }

    _renderItem = ({ item }) => (
        <MyListItem
            item={item}
        />
    );

};

/*<View style={[styles.Container]} >
                    <Header style={{ height: 70, backgroundColor: 'black' }}>
                        <View style={{ marginTop: 30, marginRight: 325 }}>
                            <Left>
                                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} style={{ color: 'white' }} />
                            </Left>
                        </View>
                    </Header>
                    <View>

                    </View>
                </View> */

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
        height: 180,
        width: 180,
        resizeMode: 'contain',
        borderRadius: 20,

    },

    toolBar: {
    },

    detalleContainer: {
        flex: 1,
        backgroundColor: '#616161',
        justifyContent: 'center',
        //alignSelf: 'stretch',
    },
    outterImage: {
        
    }

})

export default Peliculas;