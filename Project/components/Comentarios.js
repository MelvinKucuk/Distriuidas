import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ApiController from '../controller/ApiController';

class Comentarios extends Component{
    render(){
      return(
        <View style={[styles.detalleContainer]}>
          <Text></Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  detalleContainer: {
  flex: 1,
  backgroundColor: '#616161',
  justifyContent: 'center',
},
})

export default Comentarios;