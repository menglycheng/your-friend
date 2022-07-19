import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = ({ navigation }) => {
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
        <Text className="font-bold text-2xl text-blue-700">
          Forgot Your Password ?
        </Text>
        <Text className="w-72 mt-6 text-center text-gray-500">
          Enter your Email Address associated with your account.{" "}
        </Text>
        <View className="mt-20">
          <TextInput
            className="border w-72 py-3 px-3 my-2 rounded-md border-blue-500"
            placeholder="Email Address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="go"
          />
          <TouchableOpacity className="w-72 py-3 my-2 rounded-md bg-blue-500">
            <Text className="text-center text-white font-bold">Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-72 "
            onPress={() => navigation.goBack()}
          >
            <Text className="text-center text-blue-500">Back</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
