import { TextInput, StyleSheet } from "react-native";

const InputText = ({ placeholder, onChangeText, value, ...rest }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: "100%",
  },
});

export default InputText;
