import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "1rem",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    right: 0,
    width: "32%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#32A482",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
  loader: {
    marginTop: 20,
  },
});

export default styles;
