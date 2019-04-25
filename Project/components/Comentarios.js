import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Button, Text } from 'react-native';
import { LinearGradient } from 'expo'
import { Actions } from 'react-native-router-flux';
import ApiController from '../controller/ApiController';

class Comentarios extends Component {
  render() {
    return (
      <LinearGradient colors={['#584150', '#1e161b']} style={{ flex: 1 }}>
        <View style={[styles.detalleContainer]}>
          <Text></Text>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  detalleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Comentarios;