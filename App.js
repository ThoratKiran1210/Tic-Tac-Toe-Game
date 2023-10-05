import { View, StyleSheet } from "react-native";
import React from "react";
import Game from "./src/Game";
import { LinearGradient } from "expo-linear-gradient";


export default function App () {
  return (
    <LinearGradient 
      colors={["#FBE7B2", "#DDE7F3"]}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Game />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay : {
    flex: 1,
    backgroundColor: '#purple',
    justifyContent: 'center',
    alignItems: 'center'
  }
});



