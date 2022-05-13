# React Native Demo

## Setup Dev Environment

source: https://reactnative.dev/docs/environment-setup

1. Run `npm -g install expo-cli`
2. Run `expo init HelloWorld` (select blank template)

Note these instructions that `expo` provided:

```
To run your project, navigate to the directory and run one of the following npm commands.

- cd HelloWorld
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios # requires an iOS device or macOS for access to an iOS simulator
- npm run web
```

When running `npm run web`, you may need to install webpack-dev-server.  The app will automatically launch in a web browser.

When running `npm run android`, you may get an error related to not finding `adb`.  You need to modify your System Path to include:  `C:\Users\<your user folder>\AppData\Local\Android\Sdk\platform-tools`.  You may be prompted with an error about not having a connected device.  Either plug in your Android phone (with UBS Debugging enabled) or start your emulator in Android Studio before running the command.  If you are using a real phone, you will need to use the QR code.

You can modify your code in App.js (Change to say HELLO WORLD)

## Sound

1. Run `npm add react-native-sound`
2. Add the following to App.js:

```javascript
import Sound from 'react-native-sound';

Sound.setCategory('Playback');
```

NOTE: I received the following error:

```
 ERROR  TypeError: null is not an object (evaluating 'RNSound.IsAndroid')
 ERROR  Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the 
current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.
```

I tried manually linking the react-native-sound library:
1. Run `npx`
2. Run `react-native link react-native-sound`
3. Run `exit`

This produced the same error.

New Idea ... Use a library that expo recommends: expo-av

source: https://www.waldo.com/blog/sound-react-native-apps-101-tutorial-examples

1. Run `npm install expo-av`
2. Put a sound file in your assets folder (I used note_middle_c.mid)
3. Change code to have:

``` javascript
import { Audio } from 'expo-av';

const my_sound = require('./assets/geese.wav');
const soundObj = new Audio.Sound()

// Modify the App to make the Text clickable (for testing purposes)
export default function App() {
  return (
    <View style={styles.container}>
      <Text onPress={() => playSound()}>HELLO WORLD!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Then create the callback function that will play the sound
const playSound = async () => {
  await soundObj.loadAsync(my_sound);
  await soundObj.playAsync();
}
```

When running, I had to forcefully close the app (old version) and relaunch (new version) from the Expo app.

It Worked!  Just click on "Hello World!" and you hear geese (or whatever wav file you added).


