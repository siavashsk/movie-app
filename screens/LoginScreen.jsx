import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-neutral-800 h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/background.png")}
      />

      {/* Lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[255] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* Title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl"
          >
            Login
          </Animated.Text>
        </View>

        {/* Form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput
              className="text-lg font-normal text-white"
              style={{ outline: "none" }}
              placeholder="Email"
              placeholderTextColor={"gray"}
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput
              className="text-lg font-normal text-white"
              style={{ outline: "none" }}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor={"gray"}
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="w-full"
          >
            <Pressable
              className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
              onPress={() => navigation.navigate("Home")}
            >
              <Text className="text-xl font-bold text-white text-center">
                Login
              </Text>
            </Pressable>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text className="text-gray-400 font-medium">
              Don't have an account? 
            </Text>
            <Pressable onPress={() => navigation.push("Signup")}>
              <Text className="text-sky-600 font-medium">Signup</Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
