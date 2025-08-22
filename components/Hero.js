import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Hero() {
  return (
    <View style={{ 
    flex: 0.2, 
    backgroundColor: 'white',  }}>
       <Text style={styles.topText}>Little Lemon
       </Text>
       <br> </br>
       <Text>Chicago</Text>
       <Text>
        We are a family owned Mediterranean restaurant,
        focused on traditional recipes with a modern twist
       </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    topText:{
        color: 'yellow',
        fontSize: 30,
    },
});