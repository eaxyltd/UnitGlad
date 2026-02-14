import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function AddAccountScreen() {
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+234');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* 1. Logo daga sama karami */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('./assets/icon.png')} 
            style={styles.logo} 
          />
        </View>

        {/* 2. Logo Description da turanci */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Create your account</Text>
          <Text style={styles.descriptionText}>
            Please enter your details below to join UnitGlad under Eaxy Platforms.
          </Text>
        </View>

        {/* 3. Inputs (Full Name, Phone, DOB) */}
        <View style={styles.form}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.phoneInputContainer}>
            <TextInput
              style={[styles.input, styles.countryCodeInput]}
              placeholder="+234"
              value={countryCode}
              onChangeText={setCountryCode}
              keyboardType="phone-pad"
            />
            <TextInput
              style={[styles.input, styles.phoneNumberInput]}
              placeholder="8080329565"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            value={dob}
            onChangeText={setDob}
          />
        </View>

        {/* 4. Continue Button a kasan dama */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Farin background
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: -15,
  },
  logo: {
    width: 124, // Karamin logo
    height: 124,
    resizeMode: 'contain',
  },
  descriptionContainer: {
    marginTop: 0,
    alignItems: 'center',
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: -15,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  form: {
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countryCodeInput: {
    width: '25%',
  },
  phoneNumberInput: {
    width: '70%',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 40,
  },
  continueButton: {
    backgroundColor: '#800080', // Zaka iya canza kalar button din
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});