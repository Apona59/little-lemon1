import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader/>
        <MenuItems/>
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
