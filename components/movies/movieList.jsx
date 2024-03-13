import { View, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { image185 } from "../../api/movieDb";

var { width, height } = Dimensions.get("window");

export default function MovieList({ title, data, hideSeAll }) {
  let movieName = "The last samurai";
  const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {!hideSeAll && (
          <Pressable>
            <Text className="text-sky-500 text-lg">See All</Text>
          </Pressable>
        )}
      </View>

      {/* Movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => navigation.push("Movie", item)}
            >
              <View className="space-y-1 mr-4">
                <Image
                  source={{ uri: image185(item.poster_path)}}
                  className="rounded-3xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />
              </View>
              <Text className="text-neutral-300 ml-1 mt-2">
                {item.title?.length > 16
                  ? item.title.slice(0, 17) + "..."
                  : item.title}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
