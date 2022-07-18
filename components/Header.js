import { View, Text } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <View className="flex-row pb-3 pt-4 px-1 items-center justify-between mx-4 space-x-2">
      <Text className="text-xl flex-1 text-blue-700 uppercase font-bold">
        {title}
      </Text>
    </View>
  );
};

export default Header;
