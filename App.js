import { View, StyleSheet } from "react-native";
import Home from "./components/home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ModalProvider } from "./context/ModalContext";
import { ToastProvider } from "./context/ToastContext";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <ModalProvider>
          <View style={styles.container}>
            <Home />
          </View>
        </ModalProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
