import React from "react";
import About from "../../../screens/About";
import ProductDetail from "../../../screens/ProductDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/HomeScreen";
import DetailsProfile from "../../../screens/DetailsProfile";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="DetailsProfile" component={DetailsProfile} />
    </Stack.Navigator>
  );
}
