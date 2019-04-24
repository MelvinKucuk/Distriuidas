import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';
import Login from './components/Login';
import Series from './components/Series';
import Feed from './components/Feed';
import { Router, Scene } from 'react-native-router-flux';
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

let navegador = this.navigator

class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props)
  }

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#616161' }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}



const DashboardStackNavigator = createStackNavigator(
  {
    //Login: { screen: Login },
    Peliculas: { screen: Peliculas },
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
  Login: { screen: Login },
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