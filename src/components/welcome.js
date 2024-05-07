import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,Image} from 'react-native';
import LottieView from 'lottie-react-native';

const Welcome = () => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewLottie}>
          <LottieView style={styles.welcomeLottie} source={require('../../assets/lottie/welcomeanimation.json')} autoPlay loop />
        </View>
        <Image
            source={require('../../assets/vector.png')}
            style={styles.image}
          />
        <View style={styles.contentContainer}>
          <Text style={styles.contentContainerText}>Join Our Community of Champions!</Text>
          <Text style={styles.contentContainerTextSmall}>Become part of a community that inspires, motivates, and pushes each other towards peak physical fitness.</Text>
          {/* <Text style={styles.contentContainerTextSmall}>you can search and buy any event tickets as you wish</Text> */}
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
    backgroundColor: '#110C31',
    borderTopRightRadius:75
  },
  

  contentContainerText: {
    color: '#ffffff',
    fontSize: 26,
    marginLeft: 20,
    marginRight: 20,
    // fontFamily: 'Playfair Display',
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
    // fontFamily: 'Playfair Display',
    textAlign: 'center',
    lineHeight:25
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
  },

  image:{
    top:'45.2%',
    zIndex:9,
    height:'10%',
    width:'18%',
    left:1,
    position:'absolute'
  },

  welcomeLottie:{

    height:'100%',
    width:'100%',
  },

  viewLottie:{
    width: Dimensions.get('window').height * 0.5,
    height: Dimensions.get('window').height * 0.5,
  }

  
});

export default Welcome