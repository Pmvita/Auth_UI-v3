import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6195/6195696.png' }}
        resizeMode="contain"
        style={styles.loginImage}
      />
      <View style={styles.loginForm}>
        <Text style={styles.loginTitle}>Forgot Password</Text>
        <Text style={styles.loginDescription}>Enter your email to reset your password.</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')} // Navigate back to login after submission
        >
          <Text style={styles.loginButtonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.backToLoginButton}
          onPress={() => navigation.navigate('Login')} // Navigate back to login
        >
          <Text style={styles.backToLoginButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

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
    marginBottom: 10,
  },
  loginDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
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
  backToLoginButton: {
    marginTop: 10,
  },
  backToLoginButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
  loginImage: {
    width: '60%',
    height: '20%',
    top: -30,
  },
});
