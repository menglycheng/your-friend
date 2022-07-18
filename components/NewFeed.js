import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import Post from "./Post";

const NewFeed = ({ nav }) => {
  return (
    <View>
      <View className="">
        <Post username="menglycheng" date="Just Now" people="100" nav={nav} />
        <Post username="menglycheng" date="Just Now" people="30" />
        <Post
          username="menglycheng"
          date="Just Now"
          people="100"
          image="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <Post username="menglycheng" date="Just Now" people="100" />
        <Post username="menglycheng" date="Just Now" people="100" />
      </View>
    </View>
  );
};

export default NewFeed;
