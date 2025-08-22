import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View 
    style={{
       backgroundColor: '#F4CE14', 
       marginBottom:20, 
       }}>
       <Text style={{ 
        textAlign: 'center', 
        fontSize: 18, 
        color: 'black' }}>
          All rights reserved by Little Lemon, 2025{''}</Text>
    </View>
  );
}