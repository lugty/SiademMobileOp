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
      password: null
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
      fetch('http://sistema.siadem.com/account/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then((response) => response.json());
      .then((responseData) => {
        Actions.HomePage();
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../../images/logo.png')} />

          <Text style={styles.title}>Sistema Administrativo Empresarial</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
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
  }
});
