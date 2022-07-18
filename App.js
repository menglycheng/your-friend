import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { getHeaderTitle } from "@react-navigation/elements";
import { useState } from "react";
import Login from "./screens/Login";
import AuthStackNavigator from "./navigation/AuthStackNavigator";

const Stack = createStackNavigator();
export default function App() {
  const [login, setLogin] = useState(true);

  return (
    <NavigationContainer>
      <TailwindProvider>
        <StatusBar />
        {login ? (
          <BottomTabNavigator />
        ) : (
          <Stack.Navigator>
            <AuthStackNavigator />
            <BottomTabNavigator />
          </Stack.Navigator>
        )}
      </TailwindProvider>
    </NavigationContainer>
  );
}
