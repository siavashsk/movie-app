import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const SearchInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search book title"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};



export default SearchInput;
