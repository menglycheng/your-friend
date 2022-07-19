import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SignIn = ({ navigation }) => {
  const navigations = useNavigation();
  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        className="flex items-center justify-center h-full"
        behavior="padding"
      >
        <Text className="text-blue-500 font-bold text-4xl mb-8">
          Your Friend.{" "}
        </Text>
        <TextInput
          className="border w-72 py-3 px-3 my-2 rounded-md border-blue-500"
          placeholder="Username"
        />
        <TextInput
          className="border w-72 py-3 px-3 my-2 rounded-md border-blue-500"
          placeholder="Password"
          secureTextEntry
          autoCorrect={false}
          returnKeyType="go"
        />
        <TouchableOpacity className="w-72 py-3 my-2 rounded-md bg-blue-500">
          <Text className="text-center text-white">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-72 "
          onPress={() => navigation.push("ForgotPassword")}
        >
          <Text className="text-center text-blue-500">Forgot Password ? </Text>
        </TouchableOpacity>

        <Text className="mt-5">OR</Text>

        <TouchableOpacity
          className="w-72 py-3 my-2 rounded-md border mt-6 border-blue-500"
          onPress={() => navigation.push("signin")}
        >
          <Text className="text-center text-blue-500">Create New Account</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
