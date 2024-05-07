import React from 'react';
import { View, Text, Button, StyleSheet,Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function SignIn({ navigation }) {
  return (
    <>
      <View>
        <View style={styles.topContainer}>
        <Ionicons name="md-leftcircleo-circle" size={32} color="green" />
          <Text style={styles.headingText}>Welcome Back</Text>
          <Text style={styles.containerTextSmall}>Sign in to your account</Text>
        </View>
        <View style={styles.bottomContainer}>

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#110C31',
  },

  bottomContainer:{
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor:'#ffffff',
    borderTopRightRadius:65,
    borderTopLeftRadius:65,
    position:'absolute',
    top:'65%',
    left:0
  },

  headingText:{
    color:'#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },

  containerTextSmall:{
    color:'#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SignIn;