import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProfileHeader = () => {
  return (
    <View className="px-5 flex-row mt-5 bg-white mx-5 rounded-md p-2">
      <Image
        className="h-24 w-24 rounded-full"
        source={{
          url: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        }}
      />
      <View className="ml-5 ">
        <Text className="font-bold text-lg">Bill Gates</Text>
        <Text className="">@John3214</Text>
        <TouchableOpacity className=" px-14 border border-blue-500 rounded-md py-2 mt-2">
          <Text className="font-bold text-blue-500">Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
