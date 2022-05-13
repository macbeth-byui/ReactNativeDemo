import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

const my_sound = require('./assets/geese.wav');
const soundObj = new Audio.Sound()


export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={() => playSound()}>HELLO WORLD!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const playSound = async () => {
  await soundObj.loadAsync(my_sound);
  await soundObj.playAsync();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
