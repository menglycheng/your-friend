import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import About from "../components/profile/About";
import Header from "../components/Header";
import Logout from "../components/profile/Logout";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white">
      <Header title="Your Profile" />
      <View className="bg-gray-100 ">
        <ProfileHeader />
        
        <About />
        <Logout />
      </View>
    </SafeAreaView>
  );
};

export default Profile;