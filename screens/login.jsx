import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/input";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigateToSignUp = () => {
    navigation.navigate("Signup");
  };

  const login = () => {
    console.log("logdin", email, password);
  };

  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../assets/login-image.png")}
          style={{ alignSelf: "center" }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
          Never forget your notes
        </Text>
      </View>

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
        {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>}
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            title="Login"
            customStyles={{ marginTop: 25, alignSelf: "center" }}
            onPress={login}
          />
          // <Button
          //   title="Login"
          //   // customStyles={{ marginTop: 25, alignSelf: "center" }}
          //   onPress={login}
          // />
        )}
      </View>

      <TouchableOpacity onPress={navigateToSignUp} style={{ marginTop: 25 }}>
        <Text style={{ textAlign: "center" }}>
          Don't have an account?{" "}

          <Text style={{ color: "#18B18D", fontWeight: "bold" }}
            onPress={() => navigation.navigate("Signup")}
          >Sign up</Text>

        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginBottom: 16,
  },
});
