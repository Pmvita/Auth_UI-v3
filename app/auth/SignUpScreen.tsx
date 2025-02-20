import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-3391266-2937870.png' }}
                resizeMode="contain"
                style={styles.loginImage}
            />
            <View style={styles.loginForm}>
                <Text style={styles.loginTitle}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#A9A9A9"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Home')} // Adjust navigation as needed
                >
                    <Text style={styles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.signUpForgotContainer}>
                    <TouchableOpacity 
                        style={[styles.signUpButton, { marginRight: 10 }]}
                        onPress={() => navigation.navigate('Login')} // Navigate to login screen
                    >
                        <Text style={styles.signUpButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efeafa',
},
loginForm: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
},
input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
},
loginButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginTop: 20,
},
loginButtonText: {
    color: '#fff',
    fontSize: 16,
},
signUpForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
},
signUpButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
},
signUpButtonText: {
    color: '#fff',
    fontSize: 16,
},
loginImage: {
    width: '60%',
    height: '20%',
    top: -30,
},
});
