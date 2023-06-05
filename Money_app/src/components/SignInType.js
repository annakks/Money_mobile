import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default ({ selectedType, onTypeChange }) => {
  const handleTypeChange = (type) => {
    onTypeChange(type);
  };

  const buttonStyles = (type) => ({
    flex: 1,
    height: 40,
    margin: 5,
    backgroundColor: selectedType === type ? "#3DA9FC" : "#FFFFFF",
    borderWidth: 1,
    borderColor: "#3DA9FC",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  });

  const buttonTextStyles = (type) => ({
    color: selectedType === type ? "#FFFFFF" : "#3DA9FC",
    fontSize: 16,
  });

  return (
    <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 25 }}>
      <TouchableOpacity
        style={buttonStyles("despesa")}
        onPress={() => handleTypeChange("despesa")}
      >
        <Text style={buttonTextStyles("despesa")}>Despesa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttonStyles("receita")}
        onPress={() => handleTypeChange("receita")}
      >
        <Text style={buttonTextStyles("receita")}>Receita</Text>
      </TouchableOpacity>
    </View>
  );
};