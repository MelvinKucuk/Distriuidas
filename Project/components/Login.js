import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Button } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={[styles.loginContainer]}>
                <View style={[styles.imageContainer]}>
                    <Image
                        style={[styles.imageStyle]}
                        source={require('./clapperboard.png')}></Image>
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
                    <View style = {[styles.outterButton]}>
                        <Button
                            style = {[styles.button]}
                            color = '#373737'
                            title= "Login"
                            onPress= {()=> this.props.onPress()}
                            />
                    </View>
                    
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
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    outterButton: {
        justifyContent: 'center',
        marginHorizontal: 150,
    },
    button: {
        color: 'red'
    }
})

export default Login;
