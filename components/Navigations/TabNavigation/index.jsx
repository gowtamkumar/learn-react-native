import { View, Text } from "react-native";
import React from "react";

import Cart from "../../../screens/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "../StackNavigation";
import { Ionicons } from "@expo/vector-icons";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={StackNavigation} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
