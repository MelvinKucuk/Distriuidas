import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';


export default class App extends React.Component {
  render() {
    return (
      <Peliculas></Peliculas>
      //<Detalle></Detalle>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#eee',
   // justifyContent: 'center',
  },
});
