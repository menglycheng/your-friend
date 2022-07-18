import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  CogIcon,
  InformationCircleIcon,
  SupportIcon,
} from "react-native-heroicons/outline";

const Setting = () => {
  return (
    <View className="px-5  mt-5 bg-white mx-5 rounded-md p-2">
      <TouchableOpacity className="flex-row pt-3">
        <CogIcon />
        <Text className="text-base ml-3">Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row pt-3">
        <SupportIcon />
        <Text className="text-base ml-3">Help</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row pt-3">
        <InformationCircleIcon />
        <Text className="text-base ml-3">About us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
