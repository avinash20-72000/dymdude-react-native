import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const Login = () => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.contentContainerText}>There's a lot happening around you!</Text>
          <Text style={styles.contentContainerTextSmall}>Find events around you.</Text>
          <Text style={styles.contentContainerTextSmall}>you can search and buy any event tickets as you wish</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress="" style={styles.signInButtonContainer}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress="" style={styles.registerButtonContainer}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  contentContainer: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.5,
    backgroundColor: '#070321',

  },

  contentContainerText: {
    color: '#ffffff',
    fontSize: 26,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'Playfair Display',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
    fontWeight: 'bold'
  },

  contentContainerTextSmall: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'Playfair Display',
    textAlign: 'center',
  },

  buttonContainer: {
    marginTop: 30,
    flexDirection: 'column',
  },

  signInButtonContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 13,
    marginLeft:30,
    marginRight:30,
    marginBottom:20
  },
  signInButtonText: {
    fontSize: 16,
    color: "#070321",
    fontWeight: "bold",
    alignSelf: "center",
  },
  registerButtonContainer: {
    backgroundColor: "#070321",
    borderRadius: 10,
    paddingVertical: 13,
    marginLeft:30,
    marginRight:30,
    borderWidth:2,
    borderColor:'#ffffff'
  },
  registerButtonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
  }
});

export default Login