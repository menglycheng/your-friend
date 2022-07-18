import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [time, setTime] = useState("");
  const [hours, setHours] = useState(0);

  useEffect(() => {
    setHours(new Date().getHours());
    if (hours < 12) {
      setTime("Good Morning ☀️");
    } else if (hours >= 12 && hours <= 17) {
      setTime("Good Afternoon");
    } else if (hours >= 17 && hours <= 20) {
      setTime("Good Evening");
    } else if (hours >= 20 && hours <= 24) {
      setTime("Good Evening");
    }
    console.log("Hello im runinng");
    console.log(hours);

    // setTime(current);
  }, [hours]);
  return (
    <View>
      <Text className="text-lg font-bold pt-3 pb-5">{time}</Text>
    </View>
  );
};

export default Greeting;
