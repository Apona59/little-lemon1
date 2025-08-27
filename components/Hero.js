import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.heroContainer}>
       <Text style={styles.topText}>Little Lemon
       </Text>
       <Text style={styles.chicago}>Chicago</Text>
       <Text>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes with a modern twist
        </Text>
        <Image 
          source={require('../assets/banner.jpeg')} 
          style={styles.banner}
          accessible={true}
          accessibilityLabel='Little Lemon App'
        />
      </View>
  );
}

const styles = StyleSheet.create({
    heroContainer: {
        flex: 0.4,
        backgroundColor: '#495E57',
        padding: 10,
    },
    topText:{
        color: '#dfce14ff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    chicago: {
        color: 'azure',
        fontWeight: 'bold',
        fontSize:25,
    },
    bodyText: {
        color:'azure',
        flex: 1,
        fontSize: 15,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    banner: {
      width: 120,
      height: 120,
      borderRadius: 10,
    },

});