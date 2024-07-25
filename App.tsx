import { SafeAreaProvider } from "react-native-safe-area-context";
import { TaskContextProvider } from "./src/context/TaskProvider";
import { Home } from "./src/screens/Home/Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <TaskContextProvider>
          <Home />
        </TaskContextProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
