import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';
import Login from './components/Login';
import SettingsS from './components/SettingsS';
import Series from './components/Series';
import { createDrawerNavigator, createAppContainer, DrawerItems, createStackNavigator } from 'react-navigation';
import { Router, Scene } from 'react-native-router-flux';



/*
export default class App extends React.Component {
  render() {

    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} tintColor='white'
        barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
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
      <Apps />
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



//const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

 const CustomDrawerComponent = (props) => (
  <SafeAreaView Style={{ flex: 1 }}>
    <View style={{ height: 250, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./components/vaca.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    
  </SafeAreaView>
)

function checkLogin(){
  this.props.navigation.navigate('Peliculas')
}

const AppDrawerNavigator = createDrawerNavigator({
  Peliculas: Peliculas,
  Series: Series,
  Settings: SettingsS
}, {
    contentComponent: CustomDrawerComponent
  }
);
const AppContainer = createAppContainer(RootStack)

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'black',
  },
  navBarTitle: {
    color: '#FFFFFF'
  },
  barButtonTextStyle: {
    color: '#FFFFFF'
  },
  barButtonIconStyle: {
    tintColor: '#FFFFFF'
  },
});
