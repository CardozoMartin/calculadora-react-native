import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { ThemeContest } from "./src/ThemeContest"
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState("ligth")
  return (
    <ThemeContest.Provider value={theme}>

    <View style={theme === "ligth" ? styles.container :[styles.container, {backgroundColor:"#000000"}]}>
      <Text>Open up App.js to start working on your app!</Text>
      <Switch 
      value={theme === "ligth"}
      onValueChange={()=> setTheme(theme === "ligth" ? "dark": "ligth")}
      />
      <StatusBar style="auto" />
    </View>
      </ThemeContest.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
