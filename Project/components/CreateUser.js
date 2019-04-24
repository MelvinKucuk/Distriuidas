import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ApiController from '../controller/ApiController';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            lastName: null,
            email: null,
            user: null,
            password: null,
        }
    }

    checkCreate(){
        if(this.state.user != null && this.state.password != null){
        ApiController.insertUsuario(this.state.name, this.state.lastName, this.state.email, 
            this.state.user, this.state.password, this.okCreate.bind(this));  
        }
    }

    okCreate(){
        alert("Se creo el usuario exitosamente");
        this.props.onPress();
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
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Name"
                            onChangeText = {(text) => this.setState({ name: text})}
                        />
                    </View>
                    <View style={[styles.outterInput]}>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Last Name"
                            onChangeText = {(text) => this.setState({ lastName: text})}
                        />
                    </View>
                    <View style={[styles.outterInput]}>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Email"
                            onChangeText = {(text) => this.setState({ email: text})}
                        />
                    </View>
                    <View style={[styles.outterInput]}>
                        <TextInput 
                        style={[styles.textInput]}
                        placeholder="User"
                        onChangeText = {(text) => this.setState({ user: text})}
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
                            title="Create User"
                            onPress={() => this.checkCreate()}/>
                        
                    </View>
                    <View style={[styles.outterButtonCreate]}>
                    <Button
                            color='#373737'
                            title="Go Back"
                            onPress={() => this.props.onPress()}/>
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
        flex: 2,
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
