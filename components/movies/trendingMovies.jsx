import { View, Text, Pressable, Dimensions, ScrollView } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { image500 } from "../../api/movieDb";

var { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  /* const handleClick = () => {
    navigation.navigate("Movie", item);
  }; */
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <View className="flex-row">
          {data?.map((item) => {
            return (
              <MovieCard
                key={item.id}
                item={item}
                handleClick={() => navigation.push("Movie", item)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <Pressable onPress={() => handleClick(item)} className="mr-4">
      <Image
        source={{ uri: image500(item.poster_path) }}
        className="rounded-3xl"
        style={{ width: width * 0.6, height: height * 0.4 }}
      />
    </Pressable>
  );
};
