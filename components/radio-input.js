import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function RadioInput({ label, value, setValue, size = "big" }) {
  const isSelected = value === label;
  return (
    <TouchableOpacity onPress={() => setValue(label)}>
      <View style={styles.container}>
        <View
          style={[
            styles.outerCircle,
            isSelected && styles.selectedOuterCircle,
            size === "big" && styles.bigOuterCircle,
          ]}
        >
          <View
            style={[
              styles.innerCircle,
              isSelected && styles.selectedInnerCircle,
              size === "big" && styles.bigInnerCircle,
            ]}
          />
        </View>
        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  bigOuterCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  bigInnerCircle: {
    height: 16,
    width: 16,
    borderRadius: 8,
  },
  selectedOuterCircle: {
    borderColor: "#D87D4A",
  },
  selectedInnerCircle: { borderColor: "#D87D4A", backgroundColor: "#D87D4A" },
});
