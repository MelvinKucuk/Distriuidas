import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text } from "react-native";

export default class Puto extends Component{

render(){
    return (
      <View style={styles.container}>

        <View style={styles.buttonOuterLayout}>

          <View style={styles.buttonLayout}>
            <Button title="Login " />
          </View>

          <View style={styles.buttonLayout}>
            <Button title="Register " />
          </View>


          <View style={styles.buttonLayout}>
            <Button title="Logout " />
          </View>

          <View style={styles.buttonLayout}>
            <Button title="Forgot Password " />
          </View>

        </View>

      </View>

    );
  }
}

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  buttonOuterLayout: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLayout: {
    marginBottom: 10
  }
});

