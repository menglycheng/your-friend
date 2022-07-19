import { View, Text } from "react-native";
import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";

const AuthStack = createStackNavigator();

const AuthStackScreen = ({ navigation }) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="signin" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
