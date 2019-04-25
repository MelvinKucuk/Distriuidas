import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo'
import { Actions } from 'react-native-router-flux';
import ApiController from '../controller/ApiController';

class Comentarios extends Component {
  render() {
    return (
      <LinearGradient colors={['#584150', '#1e161b']} style={{ flex: 1 }}>
class Comentarios extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idUser: null,
      isLoading: true,
      comentarios: [],
    }
    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('idUser');
      if (value !== null) {
        this.setState({
          idUser: value
        })
        this.getComments(this.state.idUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getComments(idUser) {
    ApiController.getCommentByIdUser(idUser, this.okComments.bind(this));
  }

  okComments(data) {

  }

  getPeliculas() {

  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.detalleContainer}>
          <ActivityIndicator size="large" color="pink" backgroundColor=' #616161' style={{ flex: 1 }}></ActivityIndicator>
        </View>
      );
    } else {
      return (
        <View style={[styles.detalleContainer]}>
          <Text style={styles.detalleGenresTitles}>
            Comentarios
                                </Text>
          <FlatList
            data={this.state.comentarios}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({ item, index }) => {
              return (
                <FlatListItems item={item} index={index}>

                </FlatListItems>
              );
            }}
          >

          </FlatList>
        </View>
      </LinearGradient>
    )
  }
      );
    }
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
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
          <View style={styles.CircleShapeView}>
            <Text style={{ fontSize: 15, color: 'white', marginTop: 5 }}>
              {this.props.item.nombre.slice(0, 1).toUpperCase()}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
            <View>
              <Text style={{
                color: 'black',
                padding: 5,
                fontSize: 12,
                marginTop: 5
              }}>
                {this.props.item.nombre}
              </Text>
            </View>
            <View>
              <Text style={{
                color: 'black',
                paddingTop: 3,
                paddingLeft: 5,
                paddingBottom: 5,
                fontSize: 12,
              }}>
                {this.props.item.fechaComentario}
              </Text>
            </View>
          </View>
        </View>


        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginVertical: 5
          }}
        />
        <Text style={styles.FlatListItems}>
          {this.props.item.descripcion}
        </Text>
      </View>
    );

  }
}



const styles = StyleSheet.create({
  detalleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Comentarios;