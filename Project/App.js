import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';
import Login from './components/Login';
import Series from './components/Series';
import ChangePassword from './components/ChangePassword'
import CreateUser from './components/CreateUser'
import Perfil from './components/Perfil';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  SafeAreaView,
  DrawerItems
} from 'react-navigation';
import {DrawerNavigator} from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Content, Header, Body} from 'native-base';

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

const AppDrawerNavigator = createDrawerNavigator({
  Peliculas: {
    screen: PeliculasStackNavigator
  },
  Series: {
    screen: SeriesStackNavigator
  },
  Perfil: {
    screen: PerfilStackNavigator
  }
}/*,{
  initialRouteName: 'Peliculas',
  contentComponent:CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'*/
);

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  ChangePassword: { screen: ChangePasswordScreen },
  CreateUser: {screen: CreateUserScreen},
  Peliculas: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const CustomDrawerComponent = (props) => (
  <SafeAreaView Style={{ flex: 1 }}>
    <View style={{
      height: 150, backgroundColor: 'white', alignContent: 'center',
      justifyContent: 'center'
    }}>
      <Image source={require('./components/vaca.png')}
        style={{ height: 120, with: 120, borderRadius: 60 }} />
    </View>
    <ScrollView>
      <DrawerItems{...props} />
    </ScrollView>
  </SafeAreaView>
)

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

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header>
      <Body>
        <Image source={require('./components/vaca.png')}
        style={{height: '150', with:'150', borderRadius:'25'}} />
      </Body>
    </Header>
  </Container>
)

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