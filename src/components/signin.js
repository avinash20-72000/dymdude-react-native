import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Checkbox from 'expo-checkbox';

function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <View>

        <View style={styles.topContainer}>

          <View>
            <AntDesign style={styles.backIconStyle} onPress={() => navigation.goBack()} name="leftcircle" size={30} color="white" />
          </View>
          <Text style={styles.headingText}>Welcome Back</Text>
          <Text style={styles.containerTextSmall}>Sign in to your account</Text>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.signInText}>Sign In</Text>

          <View style={styles.signInFormContainer}>

            <View style={styles.inputContainer}>
              <Text style={styles.textLabel}>Your Email</Text>
              <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.textLabel}>Password</Text>
              <TextInput position="relative" style={styles.input} onChangeText={setPassword} value={password} placeholder="Enter your password"
                secureTextEntry={!passwordVisible}
              />

              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <View>
                  <AntDesign  name={passwordVisible ? 'eye' : 'eyeo'} size={30} color="#110C31" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxAndPasswordContainer}>
            <Checkbox
              value={rememberMe}
              onValueChange={setRememberMe}
              color={rememberMe ? '#110C31' : undefined}
            />
            <Text style={styles.rememberLabel}>Remember me</Text>
            <View style={styles.forgotPassword}>
              <TouchableOpacity onPress={() => console.log('Forgot Password?')}>
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.signInBuuttonContainer}>
            <TouchableOpacity onPress={() => console.log('sign in')} style={styles.signInButton}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.registerTab}>
              <Text style={{ right:5 }}>I'm a new user</Text>
              <TouchableOpacity onPress={() => console.log('register tab')}>
                <Text style={{ color: 'blue' }}>Register</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.3,
    backgroundColor: '#110C31',
    marginBottom:4.5 
  },

  backIconStyle: {
    top: 40,
    left:20,
    marginBottom: 40,
  },

  bottomContainer: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 65,
    borderTopLeftRadius: 65,
    zIndex: 10,
    minHeight: '100%',
    borderTopLeftRadius:65,
    padding: 20,
    paddingTop: 35,
    marginTop: -60, 
  },

  headingText:{
    color:'#ffffff',
    fontSize:26,
    fontWeight:'bold',
    textAlign:'center'
  },

  containerTextSmall:{
    color:'#ffffff',
    fontSize:12,
    textAlign:'center',
    marginTop:10
  },
  
  signInText: {
    color: '#110C31',
    fontSize: 24,
    top:10,
    left:10,
    fontWeight: 'bold',
  },

  signInFormContainer: {
    left:10,
    marginTop:25
  },

  input: {
    width: '93%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: '#E9E9F2',
  },

  eyeIcon: {
    position: 'absolute',
    top: 40,
    right: 40
  },

  checkboxAndPasswordContainer: {
    flexDirection: 'row',
    left:10,
    top: 5
  },

  rememberLabel: {
    left: 5,
  },

  forgotPasswordText: {
    left:70,
    color:'blue'
  },

  signInBuuttonContainer:{
    top:40,
    alignItems:'center'
  },

  signInButton: {
    backgroundColor: "#070321",
    borderRadius: 10,
    paddingVertical: 13,
    borderWidth:2,
    width: '93%',
    alignItems:'center'
  },

  signInButtonText:{
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:16
  },

  registerTab:{
    flexDirection: 'row',
    marginTop:10
  },

});

export default SignIn;