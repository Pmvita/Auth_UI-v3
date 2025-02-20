// app/auth/OnboardingScreen.tsx
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.onboardingContent}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12465/12465866.png' }}
          style={styles.onboardingImage}
        />
        <Text style={styles.onboardingTitle}>Welcome to Our App</Text>
        <Text style={styles.onboardingDescription}>Start your journey with us today.</Text>
        <Button 
          title="Get Started" 
          onPress={() => navigation.navigate('Login')} 
        />
      </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efeafa',
  },
  onboardingContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  onboardingImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  onboardingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  onboardingDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
})