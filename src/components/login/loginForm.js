import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />

        <TextInput style={styles.input}
        placeholder="Username"
        placeholderTextColor="rgba(255,255,255,0.7)"
        underlineColorAndroid='transparent'
        returnKeyType="next"
        autoCorrect={false}
        onSubmitEditing={() => this.passwordInput.focus()}
         />
        <TextInput style={styles.input}
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        underlineColorAndroid='transparent'
        secureTextEntry
        returnKeyType="go"
        ref={ (input) => this.passwordInput = input }
         />

         <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Entrar</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
});
