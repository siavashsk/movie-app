import { View, Text } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

export default function LoadButton() {
  return (
    <View className="flex-1 justify-center items-center">
      <Progress.CircleSnail thickness={4} size={28} color={"white"} />
    </View>
  );
}
