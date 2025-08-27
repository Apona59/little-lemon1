import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import Hero from './components/hero';
import MenuItems from './components/MenuItems';

export default function Home({navigation}) {

  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader/>

        <Hero/>

        <MenuItems/>
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
         <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile', {
            user: {
              name: 'Anopa Ramdial',
              email: 'anopa@example.com',
              avatar: '', 
            },
          })}
        >
          <Text style={styles.profileButtonText}>Go to Profile</Text>
        </TouchableOpacity>
        <LittleLemonFooter/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: '#495E57',
  },
    profileButton: {
    marginVertical: 20,
    backgroundColor: '#F4CE14',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  profileButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
