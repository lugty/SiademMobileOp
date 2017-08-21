import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class HomePage extends Component{

  userLogout(){
    Actions.Authentication();
  }

  render(){
    return(
      <View>
        <Text> Home Page!!!</Text>
        <TouchableOpacity onPress={this.userLogout}>
          <Text>Salir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#2f2f2f'
  }
});
