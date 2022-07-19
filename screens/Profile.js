import { View, Text, SafeAreaView, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileHeader from "../components/profile/ProfileHeader";
import About from "../components/profile/About";
import Header from "../components/Header";
import Logout from "../components/profile/Logout";

const Profile = ({ navigation }) => {
  const navigations = useNavigation();
  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <Header title="Your Profile" />
      <View className="bg-gray-100 ">
        <ProfileHeader />

        <About />
        <Logout nav={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
