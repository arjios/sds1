import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import  AppLoading  from 'expo-app-loading';

import {
  useFonts,
  Play_400Regular,
  Play_700Bold
} from '@expo-google-fonts/play';

import Header from './src/components/Header';
import Home from './src/Pages/Home';


export default function App() {
  let [fontsLoaded] = useFonts({
    Play_400Regular, Play_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <View style={styles.container}>
        <Header />
        <StatusBar style="light" />
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1F34'
  },
});