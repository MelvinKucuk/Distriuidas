import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

class Feed extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#616161'  }}>
          <Text>Feed</Text>
        </View>
      );
    }
  }

  export default Feed;