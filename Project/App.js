import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';
import Login from './components/Login';
import Series from './components/Series';
import ChangePassword from './components/ChangePassword'
import CreateUser from './components/CreateUser'


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
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Login
        onPress={this.checkLogin.bind(this)}
      />
    );
  }
  checkLogin(screen) {

    switch (screen) {
      case "login":
        this.props.navigation.navigate('Peliculas');
        break;
      case "pass":
        this.props.navigation.navigate('ChangePassword');
        break;
      case "create":
        this.props.navigation.navigate('CreateUser');
        break;
    }
  }
}

class ChangePasswordScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ChangePassword
        onPress={this.checkPassword.bind(this)}
      />
    );
  }
  checkPassword() {
    this.props.navigation.navigate('Login')
  }
}

class CreateUserScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <CreateUser
        onPress={this.checkPassword.bind(this)}
      />
    );
  }
  checkPassword() {
    this.props.navigation.navigate('Login')
  }
}



class PeliculasScreen extends React.Component {

  static navigationOptions = {
    title: 'Peliculas',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Peliculas
        onPress={this.pasarDetalle.bind(this)}
      />
    );
  }

  pasarDetalle(idMovie) {
    this.props.navigation.navigate('Detalle', { id: idMovie })
  }
}



class SeriesScreen extends React.Component {

  static navigationOptions = {
    title: 'Series',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Series
        onPress={this.pasarDetalle.bind(this)}
      />
    );
  }

  pasarDetalle(idMovie) {
    this.props.navigation.navigate('Detalle', { id: idMovie })
  }
}

class DetalleScreen extends React.Component {

  static navigationOptions = {
    title: 'Peliculas',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Detalle

      />
    );
  }
}

const PeliculasStackNavigator = createStackNavigator(
  {
    Peliculas: {
      screen: PeliculasScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10, color: 'white' }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          ),

        }
      }
    },
    Detalle: { screen: Detalle },
  },
  {
    initialRouteName: 'Peliculas',
  }
);
const SeriesStackNavigator = createStackNavigator(
  {
    Series: { screen: SeriesScreen },
    Detalle: { screen: Detalle },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: 'white' }}
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
    initialRouteName: 'Series',
  }
);
const AppDrawerNavigator = createDrawerNavigator({
  Peliculas: {
    screen: PeliculasStackNavigator
  },
  Series: {
    screen: SeriesStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  ChangePassword: { screen: ChangePasswordScreen },
  CreateUser: {screen: CreateUserScreen},
  Peliculas: { screen: AppDrawerNavigator }
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