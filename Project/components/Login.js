import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={[styles.loginContainer]}>
                <View style={[styles.inputContainer]}>
                    <Image
                        style = {[styles.imageStyle]}
                        source = {{uri :'asset:/images/clapperboard.png'}}></Image>
                </View>
                <View style={[styles.inputContainer]}>
                    <View style={[styles.outterInput]}>
                        <TextInput style={[styles.textInput]}
                        > Username </TextInput>
                    </View>
                    <View style={[styles.outterInput]}>
                        <TextInput style={[styles.textInput]}
                        > PassWord
                </TextInput>
                    </View>
                    <Image
  style={{width: '100%', height: 200,resizeMode : 'contain' }}
         source={{uri :'asset:/images/clapperboard.png'}}  
         /> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: '#616161',
        justifyContent: 'center'
    },
    textInput: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',

    },
    outterInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginHorizontal: 120,
        marginBottom: 20,
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        backgroundColor: '#616161',
        justifyContent: 'flex-start'
    },
    imageStyle: {
        width: 100,
        height: 200, 
        
    }
})

export default Login;
