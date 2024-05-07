import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const Register = () => {

    return (
        <>
            <View style={StyleSheet.container}>
                <View style={styles.topContentContainer}>
                    <Text style={styles.TopContentContainerText}>Let's Start</Text>
                    <Text style={styles.TopContentContainerTextSmall}>Create an account</Text>
                </View>
                <View style={styles.contentContainer}>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    topContentContainer: {
        height: Dimensions.get('window').height * 0.6,
        backgroundColor: '#070321',
        width: Dimensions.get('window').height * 0.5,
    },
   
    TopContentContainerText:{
        color: '#ffffff',
        fontSize: 26,
        fontWeight:'bold',
        textAlign:'center',
        
    },


    contentContainer: {
        width: Dimensions.get('window').height * 0.5,
        height: Dimensions.get('window').height * 0.8,
        backgroundColor: '#ffffff',
        marginTop: 200
    },
});

export default Register