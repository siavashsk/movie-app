import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./screens/SearchScreen";
import { ModalProvider } from "./context/ModalContext";
import { ToastProvider } from "./context/ToastContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ModalProvider>
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Welcome to book store" }}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{ title: "Search any book" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </ModalProvider>
  );
}
