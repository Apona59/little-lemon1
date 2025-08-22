import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ 
    flex: 0.15, 
    backgroundColor: 'white',  }}>
       <Text style={{ textAlign: 'center', paddingTop: 40, fontSize: 20, color: 'black' }}>Little Lemon</Text>
    </View>
  );
}