import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry, Button, Image } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';
import Login from './components/Login';
import Series from './components/Series';
import ChangePassword from './components/ChangePassword'
import CreateUser from './components/CreateUser'
import Perfil from './components/Perfil';
import DatosPersonales from './components/DatosPersonales';
import Comentarios from './components/Comentarios';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  DrawerItems,
} from 'react-navigation';
import { DrawerNavigator } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Content, Header, Left, Body } from 'native-base';

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
        onPressLogin={this.checkLogin.bind(this)}
        onPressPass={this.goPass.bind(this)}
        onPressCreate={this.goCreate.bind(this)}
      />
    );
  }
  checkLogin(id) {
    this.props.navigation.navigate('PeliculasScreen', { idUser: id });
  }

  goPass() {
    this.props.navigation.navigate('ChangePassword');
  }

  goCreate() {
    this.props.navigation.navigate('CreateUser');
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



  pasarDetalle(idMovie, idUser) {
    this.props.navigation.navigate('Detalle', { id: idMovie, idUser: idUser })
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

  pasarDetalle(idMovie, idUser) {
    this.props.navigation.navigate('Detalle', { id: idMovie, idUser: idUser })
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
    PeliculasScreen: {
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
    Series: { screen: SeriesScreen },
  },
  {
    initialRouteName: 'PeliculasScreen',
  }
);


const SeriesStackNavigator = createStackNavigator(
  {
    Series: {screen: SeriesScreen,
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
    initialRouteName: 'Series',
  }
);
/*
const PerfilStackNavigator = createStackNavigator(
  {
    Perfil: { screen: Perfil },
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
    initialRouteName: 'Perfil',
  }
)
*/
const PerfilTabNavigator = createBottomTabNavigator({
  DatosPersonales,
  Comentarios
},{
  navigationOptions: ({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
      headerTitle: 'Perfil',
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10, color: 'white' }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      ),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }
});

const PerfilStackNavigator = createStackNavigator({
  PerfilTabNavigator: PerfilTabNavigator
});

const AppDrawerNavigator = createDrawerNavigator({
  Peliculas: PeliculasStackNavigator,
  Series: SeriesStackNavigator,
  Perfil: PerfilStackNavigator,
}, {
    drawerBackgroundColor: 'pink',
    statusBarBackgorund: 'green'
  }

);



const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  ChangePassword: { screen: ChangePasswordScreen },
  CreateUser: { screen: CreateUserScreen },
  Drawer: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);




class drawerContentComponents extends Component {

  navigateToScreen = (route) => (
    () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Header Portion</Text>
          <Text style={styles.headerText}>You can display here logo or profile image</Text>
        </View>
        <View style={styles.screenContainer}>
          <View style={styles.screenStyle}>
            <Text onPress={this.navigateToScreen('Peliculas')}>Peliculas</Text>
          </View>
          <View style={styles.screenStyle}>
            <Text onPress={this.navigateToScreen('Series')}>Series</Text>
          </View>
          <View style={styles.screenStyle}>
            <Text onPress={this.navigateToScreen('Perfil')}>Perfil</Text>
          </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#616161',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
/*
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headerContainer: {
    height: 150,
  },
  headerText: {
    color: '#fff8f8',
  },
  screenContainer: {
    paddingTop: 20
  },
  screenStyle: {
    height: 30,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  screenTextStyle: {
    fontSize: 20,
    marginLeft: 20
  },

});
*/