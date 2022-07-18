import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import PostContents from "../components/post/PostContents";

const YourPost = () => {
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
