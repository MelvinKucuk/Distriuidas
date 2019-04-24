import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { Entypo, AntDesign } from '@expo/vector-icons';

var fakeData = [
    {
        "user": "Pepe",
        "comment": "La peli esta genial"
    },
    {
        "user": "Pepe",
        "comment": "La peli es mala"
    },
    {
        "user": "Pepe",
        "comment": "La peli es regular"
    },
    {
        "user": "Pepe",
        "comment": "no la veria"
    },
    {
        "user": "Pepe",
        "comment": "esta buenisima"
    },

];
class Detalle extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.navigation.getParam('id')
        }
        console.log(this.state.id);
    }

    static navigationOptions = {
        title: 'Detalle',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: 'white',
    };


    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <TouchableOpacity onPress={onPressFab} style={styles.fab}>
                    <AntDesign name="form" size={25} color="white" />
                </TouchableOpacity>
                <ScrollView>
                    <View style={styles.detalleContainer}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                <Image
                                    style={{ width: 150, height: 250, marginLeft: 10, marginTop: 10, flex: 0.45, borderRadius: 10 }}
                                    source={{ uri: 'https://pbs.twimg.com/media/D1nmVNuU4AAO2yD.jpg' }} />
                                <View style={{ flex: 0.55, flexDirection: 'column', alignContent: 'center', marginHorizontal: 10, marginTop: 20 }}>
                                    <Text style={styles.detalleTitle}>
                                        Los Vengadores
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={styles.detalleMovie}>
                                            2019
                                        </Text>
                                        <Entypo name="calendar" size={15} color="white" />
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={styles.detalleMovie}>
                                            160 min
                                        </Text>
                                        <Entypo name="clock" size={15} color="white" />
                                    </View>
                                    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                                        <Button
                                            onPress={onPressHomepage}
                                            title="Homepage"
                                            color="#B3B6B7"
                                        />
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.detalleGenresTitles}>
                                Géneros
                             </Text>
                            <Text style={styles.detalleGenres}>
                                Acción, Comedia, Suspenso, Cómic, Thriller, Ciencia Ficción
                             </Text>
                            <Text style={styles.detalleGenresTitles}>
                                Resumen
                             </Text>
                            <Text style={styles.detalleGenres}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                               consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                                  This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                             </Text>
                            <Text style={styles.detalleGenresTitles}>
                                Comentarios
                            </Text>
                            <FlatList
                                data={fakeData}
                                keyExtractor={(item, index) => 'key'+index}
                                renderItem={({ item, index }) => {
                                    return (
                                        <FlatListItems item={item} index={index}>

                                        </FlatListItems>
                                    );
                                }}
                                >
                                
                            </FlatList>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

class FlatListItems extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                margin: 5,
                borderRadius: 10
            }}>
                <Text style={styles.FlatListItems}>
                    {this.props.item.user}
                </Text>
                <Text style={styles.FlatListItems}>
                    {this.props.item.comment}
                </Text>
            </View>
        );
    }
}



function onPressFab() {

}
function onPressHomepage() {

}




const styles = StyleSheet.create({
    detalleContainer: {
        flex: 1,
        backgroundColor: '#616161',

    },
    detalleComentario: {
        flex: 1,
        backgroundColor: 'white',

    },
    detalleTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    detalleMovie: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    },
    detalleGenres: {
        fontSize: 15,
        margin: 10,
        color: '#ffffff'
    },
    detalleGenresTitles: {
        fontSize: 17,
        margin: 10,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#B3B6B7',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    },
    FlatListItems: {
        color: 'black',
        padding: 10,
        fontSize: 16,
    }

})

export default Detalle