import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';
import Login from './components/Login';
import Series from './components/Series';


import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;


class LoginScreen extends React.Component {

  constructor(props)
  {
    super(props)
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

 let id = null;

class PeliculasScreen extends React.Component {

  static navigationOptions = {
    title: 'Peliculas           ',
    headerStyle: {
        backgroundColor: 'black',
    },
    headerTintColor: 'white',
};

  constructor(props)
  {
    super(props)
  }

  render() {
    return (
      <Peliculas
        onPress = {this.pasarDetalle.bind(this)}
      />
    );
  }

  pasarDetalle(idMovie){
    this.props.navigation.navigate('Detalle', {id: idMovie})
  }
}

class DetalleScreen extends React.Component {

  static navigationOptions = {
    title: 'Peliculas           ',
    headerStyle: {
        backgroundColor: 'black',
    },
    headerTintColor: 'white',
};

  constructor(props)
  {
    super(props)
  }

  render() {
    return (
      <Detalle
        
      />
    );
  }
}



const DashboardStackNavigator = createStackNavigator(
  {
    Peliculas: { screen: PeliculasScreen },
    Detalle: { screen: Detalle },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: 'white'}}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: 'black'
        }
      };
    }
  },
  {
    initialRouteName: 'Peliculas',
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#616161',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});