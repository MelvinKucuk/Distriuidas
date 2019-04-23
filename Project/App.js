import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import Detalle from './components/Detalle';
import Peliculas from './components/Peliculas';
import Login from './components/Login';
import SettingsS from './components/SettingsS';
import Series from './components/Series';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { Router, Scene } from 'react-native-router-flux';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class App extends React.Component {
  render() {

    return (
      <Apps />
    );
  }
} const CustomDrawerComponent = (props) => (
  <SafeAreaView Style={{ flex: 1 }}>
    <View style={{ height: 250, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./components/vaca.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    
  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
  Peliculas: Peliculas,
  Series: Series,
  Settings: SettingsS
}, {
    contentComponent: CustomDrawerComponent
  }
);
const Apps = createAppContainer(AppDrawerNavigator)
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#eee',
    // justifyContent: 'center',
  },
});
