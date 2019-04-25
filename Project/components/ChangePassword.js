import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput, Button } from 'react-native';
import ApiController from '../controller/ApiController';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            oldPassword: null,
            newPassword: null,
        }
    }

    checkChange() {
        ApiController.getUsuario(this.checkUsuario.bind(this), this.state.username)
    }

    checkUsuario(data) {
        if (data.password == this.state.oldPassword) {
            ApiController.changePassword(this.state.username, this.state.newPassword, this.okChange.bind(this));
        } else {
        }
    }

    okChange() {
        alert("Cambio de contraseña exitoso");
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
                            placeholder="Username"
                            onChangeText={(text) => this.setState({ username: text })}
                        />
                    </View>
                    <View style={[styles.outterInput]}>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="Old Password"
                            onChangeText={(text) => this.setState({ oldPassword: text })}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={[styles.outterInput]}>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder="New Password"
                            onChangeText={(text) => this.setState({ newPassword: text })}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={[styles.outterButton]}>
                        <Button
                            color='#373737'
                            title="Change Password"
                            onPress={() => this.checkChange()} />

                    </View>
                    <View style={[styles.outterButtonCreate]}>
                        <Button
                            color='#373737'
                            title="Go Back"
                            onPress={() => this.props.onPress()} />
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
