import { View, Text } from "react-native";
import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
