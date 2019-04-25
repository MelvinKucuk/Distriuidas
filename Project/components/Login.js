import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ApiController from '../controller/ApiController';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
    }

    checkLogin(){
        ApiController.getUsuario(this.checkUsuario.bind(this), this.state.username)        
    }

    checkUsuario(data){
        if(data.usuarioId == this.state.username && data.password == this.state.password){
            console.log(this.state.username);
            this.props.onPressLogin(this.state.username)
        } else{
            alert("Contraseña incorrecta");
        }
    }

    render() {
        return (
            <View style={[styles.loginContainer]}>
                <View style={[styles.imageContainer]}>
                    <Image
                        style={[styles.imageStyle]}
                        source={require('./clapperboard.png')}/>
                </View>
                <View style={[styles.inputContainer]}>
                    <View style={[styles.outterInput]}>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Username"
                            onChangeText = {(text) => this.setState({ username: text})}
                        />
                    </View>
                    <View style={[styles.outterInput]}>
                        <TextInput 
                        style={[styles.textInput]}
                        placeholder="Password"
                        onChangeText = {(text) => this.setState({ password: text})}
                        secureTextEntry={true}
                        />
                    </View>
                    <View style={[styles.outterButton]}>
                        <Button
                            color='#373737'
                            title="Login"
                            onPress={() => this.checkLogin()}/>
                        
                    </View>
                    <View style={[styles.outterButtonCreate]}>
                    <Button
                            color='#373737'
                            title="Create Account"
                            onPress={() => this.props.onPressCreate()}/>
                    </View>
                    <View style={[styles.outterButtonCreate]}>
                    <Button
                            color='#373737'
                            title="Change Password"
                            onPress={() => this.props.onPressPass()}/>
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
        textAlign: 'center',
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
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    outterButtonCreate: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
})

export default Login;
