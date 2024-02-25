import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Book, AddModal, EditModal } from "../";
import styles from "./styles";
import { DELETE, GET } from "../../services/endpoints";
import Icon from "react-native-vector-icons/FontAwesome";
import { useModal } from "../../context/ModalContext";
import { useQuery } from "react-query";
import SearchInput from "../search";
import { useToast } from "../../context/ToastContext";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const { showToast } = useToast();
  // Add Modal
  const { openModal } = useModal();
  // Edit modal
  const { openEditModal } = useModal();
  // search states
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const handleDelete = async (id) => {
    try {
      DELETE(`/books/${id}`);
      showToast("Book deleted", "ok");
    } catch (error) {
      console.log(error);
      showToast("Failed to delete book", "not");
    }
  };

  const getBooks = async () => {
    try {
      const data = await GET("/books");
      return data;
    } catch (err) {
      showToast("Failed to load books", "not");
      console.log("Error", err);
      throw err;
    }
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Books"],
    queryFn: () => getBooks(),
  });

  // Search functionality
  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {}, [searchTerm]);

  if (isLoading)
    return <ActivityIndicator size="large" style={styles.loader} />;
  if (isError)
    return (
      <Text style={{ color: "red", fontWeight: "bold" }}>
        Error fetching data
      </Text>
    );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <SearchInput value={searchTerm} onChangeText={handleSearch} />
        </View>
        <Pressable style={styles.button} onPress={openModal}>
          <Icon name="plus" size={10} color="#fff" />
          <Text style={styles.buttonText}>Add Book</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.button, { width: "100%", marginTop: 5 }]}
        onPress={() => navigation.navigate("Search")}
      >
        <Icon name="search" size={10} color="#fff" />
        <Text style={styles.buttonText}>Search Screen</Text>
      </Pressable>
      <ScrollView style={styles.container}>
        {filteredData?.map((item) => (
          <Book
            key={item.id}
            item={item}
            openEditModal={openEditModal}
            handleDelete={handleDelete}
          />
        ))}
      </ScrollView>

      <EditModal />

      <AddModal />
    </View>
  );
};

export default Home;
