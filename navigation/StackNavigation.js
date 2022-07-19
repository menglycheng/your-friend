import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

import Profile from "../screens/Profile";
import Search from "../screens/Search";
import YourPost from "../screens/YourPost";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const YourPostStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="search" component={Search} />
    </SearchStack.Navigator>
  );
};
const YourPostStackScreen = () => {
  return (
    <YourPostStack.Navigator>
      <YourPostStack.Screen name="your post" component={YourPost} />
    </YourPostStack.Navigator>
  );
};
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

export {
  HomeStackScreen,
  SearchStackScreen,
  YourPostStackScreen,
  ProfileStackScreen,
};
