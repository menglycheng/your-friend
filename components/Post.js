import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { DotsHorizontalIcon } from "react-native-heroicons/outline";

const Post = ({ username, date, people, image, nav }) => {
  return (
    <View className="bg-white rounded-md p-3 mb-5">
      <View className="flex-row justify-between">
        <View>
          <Text>@{username}</Text>
          <Text className="text-xs pl-4">{date}</Text>
        </View>
        <TouchableOpacity>
          <DotsHorizontalIcon />
        </TouchableOpacity>
      </View>
      <View className="py-4 px-2 ">
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          className="truncate overflow-hidden"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nobis
          sit perspiciatis iusto non!
        </Text>
      </View>

      {image ? (
        <View className="">
          <Image
            className="object-fit relative h-96 w-full rounded-md"
            source={{ url: image }}
          />
        </View>
      ) : (
        <></>
      )}

      <View className="flex-row justify-between px-2 border-t space-x-2 border-gray-300 items-center">
        <Text className="pt-3 ">{people} Vistor</Text>

        <TouchableOpacity
          className="pt-3 "
          onPress={() => nav.navigate("sign_in")}
        >
          <View className="bg-blue-700 py-2 px-4 rounded-full">
            <Text className="text-white">Discuss</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
