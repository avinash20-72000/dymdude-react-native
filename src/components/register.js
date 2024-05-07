import React from 'react';
import { View, Text, Button, StyleSheet,Dimensions } from 'react-native';

function Register({ navigation }) {
  return (
    <>
      <View>
        <View style={styles.topContainerRegister}></View>
        <View style={styles.bottomContainerRegister}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainerRegister: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#110C31',
  },

  bottomContainerRegister:{
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor:'#ffffff',
    borderTopRightRadius:65,
    borderTopLeftRadius:65,
    position:'absolute',
    top:'65%',
    left:0
  },
});

export default Register;