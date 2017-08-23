import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';

export default class Profile extends Component{

  async userLogout(){
    try{
      await AsyncStorage.removeItem('token');
      Alert.alert('Cierre de Sesion Exitoso!');
      Actions.Login();
    }catch(error){
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={style.buttonWrapper}
          onPress={this.userLogout}
        >
          <Text style={styles.buttonText}>
          Salir
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
