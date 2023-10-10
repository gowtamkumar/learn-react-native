import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import DrawerNavigation from "./components/Navigations/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./fonts/Antonio-VariableFont_wght.ttf"),
    LeagueSpartan: require("./fonts/LeagueSpartan-VariableFont_wght.ttf"),
    RobotoMedium: require("./fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.DarkBlue,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
