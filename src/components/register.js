import React,{useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Checkbox from 'expo-checkbox';

function Register({ navigation }) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termAndCondition, setTermAndCondition] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <View>
        <View style={styles.topContainerRegister}>
          <View>
            <AntDesign style={styles.backIconStyle} onPress={() => navigation.goBack()} name="leftcircle" size={30} color="white" />
            <Text style={styles.headingText}>Let's Start</Text>
            <Text style={styles.containerTextSmall}>Create an account</Text>
          </View>
        </View>
        <View style={styles.bottomContainerRegister}>
          <Text style={styles.signUpText}>Sign Up</Text>

          <View style={styles.signUpFormContainer}>

            <View style={styles.inputContainer}>
              <Text style={styles.textLabel}>Full Name</Text>
              <TextInput style={styles.input} onChangeText={setFullname} value={fullname} placeholder="Enter full name"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.textLabel}>Email Address</Text>
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
                  <AntDesign name={passwordVisible ? 'eye' : 'eyeo'} size={30} color="#110C31" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxTermAndCondition}>
            <Checkbox
              value={termAndCondition}
              onValueChange={setTermAndCondition}
              color={termAndCondition ? '#110C31' : undefined}
            />
            <Text style={styles.termAndConditionStyle}>I agree to the Term & Conditions and 
            Privacy Policy</Text>
          </View>

          <View style={styles.signUpButtonContainer}>
            <TouchableOpacity onPress={() => console.log('create account')} style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.signInTab}>
              <Text style={{ right:5 }}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
                <Text style={{ color: 'blue' }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainerRegister: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.3,
    backgroundColor: '#110C31',
    marginBottom: 4.5
  },

  backIconStyle: {
    top: 40,
    left: 20,
    marginBottom: 40,
  },

  bottomContainerRegister: {
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 65,
    borderTopLeftRadius: 65,
    zIndex: 10,
    minHeight: '100%',
    borderTopLeftRadius: 65,
    padding: 20,
    paddingTop: 35,
    marginTop: -60,
  },

  headingText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  containerTextSmall: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10
  },

  signUpText: {
    color: '#110C31',
    fontSize: 24,
    top: 10,
    left: 10,
    fontWeight: 'bold',
  },

  signUpFormContainer:{
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

  checkboxTermAndCondition:{
    flexDirection:'row',
    left:10,
    top: 5
  },

  termAndConditionStyle:{
    left:5,
  },

  signUpButtonContainer:{
    top:40,
    alignItems:'center'
  },

  signUpButton:{
    backgroundColor: "#070321",
    borderRadius: 10,
    paddingVertical: 13,
    borderWidth:2,
    width: '93%',
    alignItems:'center'
  },

  signUpButtonText:{
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:16
  },

  signInTab:{
    flexDirection: 'row',
    marginTop:10
  },
});

export default Register;