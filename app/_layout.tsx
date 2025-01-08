import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='(drawer)'  options={{headerShown: false}} />
      <Stack.Screen name='(tabs)'  options={{headerShown: false}} />
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
    </Stack>
  );
}
