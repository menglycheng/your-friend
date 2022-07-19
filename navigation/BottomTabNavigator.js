import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DocumentTextIcon,
  HomeIcon,
  SearchIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeIconFocus,
  SearchIcon as SearchIconFocus,
  DocumentTextIcon as DocumentTextIconFocus,
  UserCircleIcon as UserCircleIconFocus,
} from "react-native-heroicons/solid";
import AuthStackNavigator from "./AuthStackNavigator";
import { createStackNavigator } from "@react-navigation/stack";

import {
  HomeStackScreen,
  SearchStackScreen,
  YourPostStackScreen,
  ProfileStackScreen,
} from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTinitColor: "Black",
      }}
    >
      <Tab.Screen
        name={"home"}
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? <HomeIconFocus size={30} /> : <HomeIcon size={30} />}
            </View>
          ),
        }}
      />
      {/* Search Page */}
      <Tab.Screen
        name={"search"}
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <SearchIconFocus size={30} />
              ) : (
                <SearchIcon size={30} />
              )}
            </View>
          ),
        }}
      />
      {/* Your Post Page  */}
      <Tab.Screen
        name={"your_post"}
        component={YourPostStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <DocumentTextIconFocus size={30} />
              ) : (
                <DocumentTextIcon size={30} />
              )}
            </View>
          ),
        }}
      />
      {/* Profile Page  */}
      <Tab.Screen
        name={"profile"}
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <UserCircleIconFocus size={30} />
              ) : (
                <UserCircleIcon size={30} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
