import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  Text,
  Image,
  ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {RkButton} from 'react-native-ui-kitten';

export default class Profile extends Component{

  async userLogout(){
    try{
      await AsyncStorage.removeItem('token');
      Alert.alert('Cierre de Sesion Exitoso!');
      Actions.Authentication();
    }catch(error){
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView
          automaticallyAdjustContentInsets={true}>
          <Image style={styles.picture} source={require('../../../images/logo.png')} />
          <Text style={styles.title}>Sistema Administrativo Empresarial</Text>

          <RkButton rkType="large" onPress={this.userLogout}>Salir</RkButton>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={this.userLogout}
          >
            <Text style={styles.buttonText}>
            Salir
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  pictureContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  buttonWrapper: {
    backgroundColor:'#388c82',
		marginBottom: 10,
    width: 300
  },
  buttonText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    color: '#fff'
  },
  picture:{
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  title:{

  },
  actionsContainer:{

  }
});
