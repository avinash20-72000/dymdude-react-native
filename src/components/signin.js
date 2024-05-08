import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
          <Icon style={styles.backIconStyle} name="arrow-back" size={30} color="#110C31" onPress={() => navigation.goBack()} />
          <Text style={styles.headingText}>Welcome Back</Text>
          <Text style={styles.containerTextSmall}>Sign in to your account</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.signInText}>Sign In</Text>
          <View style={styles.signInFormContainer}>
            <Text style={styles.textLabel}>Your Email</Text>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styles.textLabel}>Password</Text>
            <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Enter your password"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon name={passwordVisible ? 'visibility' : 'visibility-off'} size={20} color="grey" />
            </TouchableOpacity>

          </View>

          <View style={styles.checkboxAndPasswordContainer}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={rememberMe}
                onValueChange={setRememberMe}
                color={rememberMe ? '#110C31' : undefined}
              />
              <Text style={styles.rememberLabel}>Remember me</Text>
            </View>
            <View style={styles.forgotPassword}>
              <TouchableOpacity onPress={() => console.log('Forgot Password?')}>
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
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
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#110C31',
  },

  bottomContainer: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 65,
    borderTopLeftRadius: 65,
    position: 'absolute',
    top: '65%',
    left: 0
  },

  headingText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
  },

  containerTextSmall: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },

  backIconStyle: {
    backgroundColor: '#ffffff',
    height: 35,
    width: 35,
    borderRadius: 50,
    position: 'absolute',
    top: 30,
    left: 20
  },

  signInText: {
    color: '#110C31',
    fontSize: 26,
    fontWeight: 'bold',
    top: 50,
    left: 30,
  },

  signInFormContainer: {
    alignItems: 'center',
    top: 60,
  },

  input: {
    width: '85%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: '#E9E9F2',
  },

  textLabel: {
    fontSize: 12,
    right: 136
  },

  eyeIcon: {
    position: 'absolute',
    top: 128,
    right: 40
  },

  checkboxAndPasswordContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    position:'relative',
    top:70
  },

  checkboxContainer: {
    flexDirection: 'row',
    left:34,
  },

  rememberLabel:{
    left:10,
  },
});

export default SignIn;