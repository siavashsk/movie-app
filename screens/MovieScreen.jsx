import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/movies/cast";
import MovieList from "../components/movies/movieList";
import Loading from "../components/ui/loading";
import {
  apiBaseUrl,
  fallbackMoviePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  image500,
} from "../api/movieDb";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

export default function MovieScreen() {
  const { params: item } = useRoute();
  const [movie, setMovie] = useState([]);
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([]);
  const [simmilarMovies, setSimmilarMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, []);

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
    setLoading(false);
  };

  const getMovieCredits = async (id) => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) setCast(data.cast);
  };

  const getSimilarMovies = async (id) => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) setSimmilarMovies(data.results);
  };
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* back button and movie poster */}
      <View className="w-full">
        <SafeAreaView
        style={{paddingTop: 14}}
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4 p-4" +
            topMargin
          }
        >
          <Pressable
            onPress={() => navigation.goBack()}
            className="bg-sky-500 rounded-xl p-1"
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color={"white"} />
          </Pressable>
          <Pressable onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon
              size={35}
              color={isFavourite ? "rgb(14 165 233)" : "white"}
            />
          </Pressable>
        </SafeAreaView>
        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              style={{ width, height: height * 0.55 }}
              source={{
                uri: image500(movie?.poster_path) || fallbackMoviePoster,
              }}
            />
            <LinearGradient
              colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>

      {/* Movie details view */}
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        {/* Title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movie?.title}
        </Text>
        {/* status, release, runtime */}
        {movie?.id ? (
          <Text className="text-neutral-400 font-semibold text-base text-center">
            {movie?.status} • {movie?.release_date?.split("-")[0]} •{" "}
            {movie?.runtime} min
          </Text>
        ) : null}

        {/* Genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          {movie?.genres?.map((genre, index) => {
            let showDot = index + 1 != movie.genres.length;
            return (
              <Text
                key={index}
                className="text-neutral-400 font-semibold text-base text-center"
              >
                {genre?.name} {showDot ? "•" : null}
              </Text>
            );
          })}

          {/* <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill •
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy •
          </Text> */}
        </View>

        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wider">
          {movie?.overview}
        </Text>
      </View>

      {/* Cast */}
      {cast.length > 0 && <Cast navigation={navigation} cast={cast} />}

      {/* Similar movies */}
      {simmilarMovies.length > 0 && (
        <MovieList
          title={"Simmilar Movies"}
          hideSeAll={true}
          data={simmilarMovies}
        />
      )}
    </ScrollView>
  );
}
