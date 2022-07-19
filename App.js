import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { getHeaderTitle } from "@react-navigation/elements";
import { useState } from "react";
import Login from "./screens/SignIn";
import AuthStackNavigator from "./navigation/AuthStackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import AuthStackScreen from "./navigation/AuthStackNavigator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <NavigationContainer>
      <TailwindProvider>
        <StatusBar />
        {login ? <BottomTabNavigator /> : <AuthStackScreen />}
      </TailwindProvider>
    </NavigationContainer>
  );
}
