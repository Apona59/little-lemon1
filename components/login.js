import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function UserLogin(){
    const [name, onChangeName] = React.useState('');
    const [Email, onChangeEmail] = React.useState('');
    return (
    <ScrollView style = {styles.container}>
        <Text style={styles.inputLabel }
        >Name* </Text>
        <TextInput
        style = {styles.input}
        value = {name}
        onChangeText={onChangeName}
    />
        <Text style={styles.inputLabel}
        >Email*</Text>
    <TextInput
        style = {styles.input}
        value = {Email}
        onChangeText={onChangeEmail}
        />
    </ScrollView>
    )
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
}); 
