import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Detalle from './components/Detalle';
import Puto from './components/Puto';


export default class App extends React.Component {
  render() {
    return (
      <Puto></Puto>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
   // justifyContent: 'center',
  },
});
