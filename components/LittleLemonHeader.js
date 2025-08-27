import { StyleSheet, Text, View, Image} from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ 
    flex: 0.15, 
    backgroundColor: 'white',  }}>
      <Image source={require('../assets/LIttle-Lemon-Logo.png')} 
      style={styles.logo}
      accessible={true}
      accessibilityLabel='Little Lemon App'/>
       
    </View>
  );
}

const styles = StyleSheet.create({ 
    logo: {
     height: 90,
     width: 200,
     resizeMode: 'contain',
     alignSelf: 'center',
  },
}); 
