import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BellIcon, SearchIcon } from "react-native-heroicons/outline";
import NewFeed from "../components/NewFeed";
import Greeting from "../components/Greeting";
export default function HomeScreen({ navigation }) {
  const navigations = useNavigation();
  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-6">
      <View className="flex-row pb-3 pt-4 px-1 items-center justify-between mx-4 space-x-2">
        <Text className="text-xl flex-1 text-blue-700 uppercase font-bold">
          Your Friend
        </Text>
        <BellIcon />
      </View>

      {/* NewFeed */}

      <ScrollView className="bg-gray-100 px-5 pt-2 h-screen mb-14">
        <Greeting />
        <NewFeed nav={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
