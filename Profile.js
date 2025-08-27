import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const loadUser = async () => {
      try {
        const name = await AsyncStorage.getItem('@user_name');
        const email = await AsyncStorage.getItem('@user_email');

        if (name && email) {
          setUser({ name, email });
        }
      } catch (e) {
        console.log('Failed to load user data');
      }
    };

    loadUser();
  }, []);

  const getInitials = (name) => {
    if (!name) return '';
    const names = name.trim().split(' ');
    if (names.length === 1) return names[0][0].toUpperCase();
    return (names[0][0] + names[1][0]).toUpperCase();
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@user_name');
      await AsyncStorage.removeItem('@user_email');
      navigation.replace('Onboarding');
    } catch (e) {
      Alert.alert('Error', 'Failed to log out');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.placeholderAvatar}>
          <Text style={styles.avatarText}>{getInitials(user.name)}</Text>
        </View>

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  profileContainer: {
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  placeholderAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F4CE14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { 
    fontSize: 40, 
    color: '#fff', 
    fontWeight: 'bold' },
  name: { 
    fontSize: 24, 
    fontWeight: '600', 
    marginTop: 20 },
  email: { 
    fontSize: 18, 
    color: '#555', 
    marginTop: 5 },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#495E57',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  logoutButtonText: {
    color: '#F4CE14',
    fontSize: 16,
    fontWeight: '600',
  },
});