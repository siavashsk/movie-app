import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 300,
    height: 410,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
  },

  /* text input styles  */

  submitButton: {
    marginTop: 10,
    width: "96%",
    backgroundColor: "#32A482",
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  error: {
    color: "#C74444",
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 2,
  },
});

export default styles;
