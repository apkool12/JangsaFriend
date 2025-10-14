import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
