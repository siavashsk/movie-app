import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    margin: 20,
    borderRadius: 5,
    bottom: 0,
    width: "90%",
    height: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
