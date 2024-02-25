import { useState } from "react";
import { View } from "react-native";
import { TextInput, StyleSheet, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { GET } from "../services/endpoints";
import { Book } from "../components";
import { useModal } from "../context/ModalContext";
import { useToast } from "../context/ToastContext";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [book, setBooks] = useState([]);
  const [wait, setWait] = useState(false);
  const [error, setError] = useState(false);
  const { openEditModal } = useModal();
  const { showToast } = useToast();

  const getBooks = async () => {
    if (searchTerm === "") {
      setError(true);
      return;
    }
    try {
      const data = await GET(`/books/${searchTerm}`);
      setBooks(data);
      setError(false);
      setWait(true);
    } catch (error) {
      setError(true);
    }
  };

  const handleDelete = async () => {
    try {
      DELETE(`/books/${searchTerm}`);
      showToast("Book deleted", "ok");
    } catch (error) {
      showToast("Failed to delete book", "not");
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={styles.input}
          placeholder="Search book id"
          value={searchTerm}
          onChangeText={handleSearch}
        />
        <Pressable style={styles.button} onPress={getBooks}>
          <Icon
            style={{ textAlign: "center", paddingVertical: 6 }}
            name="search"
            size={22}
            color="#fff"
          />
        </Pressable>
      </View>

      <View style={{ marginVertical: 5 }}>
        {wait && (
          <Book
            key={book.id}
            item={book}
            handleDelete={handleDelete}
            openEditModal={openEditModal}
          />
        )}
        {error && <Text style={styles.errorText}>Book Not Found</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  button: {
    width: 50,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: "#32A482",
  },
  errorText: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "600",
    fontSize: 18,
    color: "#C74444",
  },
});

export default SearchScreen;
