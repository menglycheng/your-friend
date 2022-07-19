import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import PostContents from "../components/post/PostContents";
import { useNavigation } from "@react-navigation/native";

const YourPost = () => {
  const navigations = useNavigation();
  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <Header title="Your Posts" />
      <View className="bg-gray-100 ">
        <PostContents />
      </View>
    </SafeAreaView>
  );
};

export default YourPost;
