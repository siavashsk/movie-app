import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth - 50,
    backgroundColor: "#D6D6D6",
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 15,
    paddingHorizontal: 20,
    // adding shadow
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.32,
    shadowRadius: 3.14,
  },
  title: {
    fontSize: 14,
    width: "210px",
    fontWeight: "bold",
    marginBottom: 5,
    color: "#444",
  },
  author: {
    fontSize: 11,
    width: "210px",
  },
  genre: {
    fontWeight: "bold",
    color: "#555",
  },
  yearPublished: {
    fontWeight: "bold",
    color: "#555",
  },
  icon: {
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default styles;
