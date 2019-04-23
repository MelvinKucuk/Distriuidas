import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Detalle from './components/Detalle';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class App extends React.Component {
  render() {
    return (
      <Detalle></Detalle>
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
