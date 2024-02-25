import { QueryClient, QueryClientProvider } from "react-query";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
}
