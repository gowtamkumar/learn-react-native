import React from "react";
import { View, Text, ActivityIndicator, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { showMessage } from "react-native-flash-message";
import RadioInput from "../components/radio-input";
import Input from "../components/input";

const OPTIONS = ["Male", "Female"];

export default function Signup() {
  const [gender, setGender] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const signup = async () => {
    setLoading(true);
    // const {} = signupData

    console.log("SignUp", name, password, email, gender, age);

    try {
      setLoading(false);
    } catch (error) {
      console.log("error ---> ", error);
      showMessage({
        message: "ERROR!",
        type: "danger",
      });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ margin: 25 }}>
        <Input
          placeholder="Email"
          autoCapitalize={"none"}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Input
          placeholder="Full name"
          autoCapitalize={"words"}
          onChangeText={(text) => setName(text)}
        />
        <Input placeholder="Age" onChangeText={(text) => setAge(text)} />

        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 15 }}>Select your gender</Text>
          {OPTIONS.map((option, index) => (
            <RadioInput
              key={index}
              label={option}
              value={gender}
              setValue={setGender}
            />
          ))}
        </View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            title="Submit"
            customStyles={{ marginTop: 25, alignSelf: "center" }}
            onPress={signup}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
