import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Image
        source={require('./assets/spotify.png')}
        style={styles.spotify}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:`center`,
    alignContent: `center`,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#282828',
    padding: 8,
    
  },
spotify:{
width: 130,
height: 130,
}
});
