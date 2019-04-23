import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';
import Login from './components/Login'
import { Router, Scene } from 'react-native-router-flux';
import {createStackNavigator, createAppContainer} from 'react-navigation';


/*
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="Login"
            component={Login}
            title="Login"
            initial
          />
          <Scene
            key="Peliculas"
            component={Peliculas}
            title="Peliculas"
          />
          <Scene
            key=""
            component={}
            title=""
          />
        </Scene>
      </Router>
    );
  }
}
*/

let navegador = this.navigator

class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
  };

  constructor(props)
  {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <Login
        onPress = {this.checkLogin.bind(this)}
      />
    );
  }

  checkLogin(){
    this.props.navigation.navigate('Peliculas')
  }
}




const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Detalle: {
      screen: Detalle,
    },
    Peliculas: {
      screen: Peliculas,
    },
  },
  {
    initialRouteName: 'Login',
  }
);



const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#eee',
    // justifyContent: 'center',
  },
});
