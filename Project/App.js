import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';
import Login from './components/Login'
import { Router, Scene } from 'react-native-router-flux';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="Detalle"
            component={Detalle}
            title="Detalle"
            initial
          />
          <Scene
            key="Peliculas"
            component={Peliculas}
            title="Peliculas"
          />
        </Scene>
      </Router>
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
