import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native';
import LoginForm from './loginForm';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component{

  constructor(){
    super();
    this.state = {
      username: null,
      password: null,
      errorMessage: null
    }
  }

  async saveItem(item, selectedValue){
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (e) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  userSignup(){
    if(this.state.username && this.state.password){
      var formData  = new FormData();
      formData.append("username", this.state.username);
      formData.append("password", this.state.password);

      fetch('https://sistema.siadem.com/account/loginAPI', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      })
      .then((response) => response.json())
      .then((responseData) => {
        if(responseData.status)
          this.getAccountTokenCSRF();
        else{
          var errorMessage = responseData.error;
          this.setState({errorMessage});
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  getAccountTokenCSRF(){
    fetch('https://sistema.siadem.com/account/csrf', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.token){
        this.saveItem('token', responseData.token);
        Actions.HomePage();
      }else{
        var errorMessage = 'No se pudo obtener el token de sesion';
        this.setState({errorMessage});
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../images/logo.png')} />

          <Text style={styles.title}>Sistema Administrativo Empresarial</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={this.state.errorMessage?styles.error:''}>{this.state.errorMessage}</Text>
          <LoginForm
            handlerLogin={this.userSignup.bind(this)}
            username={this.state.username}
            password={this.state.password}
            setCredentials={this.setState.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 140,
    resizeMode: 'contain'
  },
  title: {
    color: '#fff',
    marginTop: 5,
    opacity: 0.7
  },
  error:{
    color: '#ff0000',
    opacity: 0.7,
    // backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    textAlign: 'center'
  }
});
