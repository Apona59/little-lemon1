import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import Hero from './components/Hero';
import MenuItems from './components/MenuItems';
import UserLogin from './components/login';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader/>
        <Hero/>
        <UserLogin/>
      </View>
      <View style={{ backgroundColor: '#495E57' }}>
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
});
