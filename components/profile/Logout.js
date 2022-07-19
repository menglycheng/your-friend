import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Logout = ({ nav }) => {
  return (
    <TouchableOpacity className="px-5  mt-5 bg-red-500 mx-5 rounded-md p-2">
      <Text className="text-center text-white font-bold">Logout</Text>
    </TouchableOpacity>
  );
};

export default Logout;
