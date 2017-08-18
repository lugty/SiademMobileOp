import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import LoginForm from './loginForm';

export default class Login extends Component{
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
