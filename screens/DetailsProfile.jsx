import { View, Text, Button } from 'react-native'
import React from 'react'

export default function DetailsProfile({navigation}) {
  return (
    <View>
      <Text>This is the Details Profile</Text>
      <Button
        title="Go to Details Profile"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  )
}