import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, KeyboardAvoidingView, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LittleLemonHeader from './components/LittleLemonHeader';
import Hero from './components/hero';

export default function Onboarding({ navigation }) {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const isFilled = name.trim() !== '' && email.trim() !== '';

  const handleNext = async () => {
    try {
      await AsyncStorage.setItem('@user_name', name);
      await AsyncStorage.setItem('@user_email', email);
      navigation.replace('Home');
    } catch (e) {
      Alert.alert('Error', 'Failed to save data');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView keyboardDismissMode="on-drag">
        <LittleLemonHeader />
        <Hero />

        <Text style={styles.inputLabel}>Name*</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={onChangeName}
          placeholder="Name"
          maxLength={50}
        />

        <Text style={styles.inputLabel}>Email*</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="Email"
          maxLength={50}
          keyboardType="email-address"
        />

        <Pressable
          onPress={handleNext}
          style={({ pressed }) => [
            styles.button,
            !isFilled && styles.buttonDisabled,
            pressed && isFilled && styles.buttonPressed,
          ]}
          disabled={!isFilled}
        >
          <Text style={{ fontSize: 30 }}>Next</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: 'white',
  }, 
  input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    borderRadius: 10,
    padding: 5, 
    fontSize: 18, 
    borderColor: '#6f7773ff', 
    backgroundColor: 'white', 
  }, 
  messageInput: { 
    height: 100, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    backgroundColor: '#F4CE14', 
  }, 
    inputLabel: { 
    fontSize: 24, 
    padding: 10, 
    marginVertical: 8, 
    color: '#a3a3b1ff',
  }, 
  headingSection: { 
    fontSize: 28, 
    padding: 20, 
    marginVertical: 8, 
    color: '#EDEFEE', 
    textAlign: 'center', 
    backgroundColor: '#495E57', 
  }, 
  button: {
    margin: 12,
    padding: 10,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,

  },
  buttonPressed: {
    opacity: 0.7 
  }
}); 
