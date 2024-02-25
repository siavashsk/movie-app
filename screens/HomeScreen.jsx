import { ModalProvider } from "../context/ModalContext";
import { ToastProvider } from "../context/ToastContext";
import { View, StyleSheet } from "react-native";
import Home from "../components/home";

const HomeScreen = () => {
  return (
    <ToastProvider>
      <ModalProvider>
        <View style={styles.container}>
          <Home />
        </View>
      </ModalProvider>
    </ToastProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
