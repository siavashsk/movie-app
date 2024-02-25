import { View, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const Toast = ({ message, type }) => {
  const backgroundColor = type === "ok" ? "#32A482" : "#933D3D";

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View
        style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 5 }}
      >
        {type === "ok" ? (
          <Icon name="check" size={15} color="#fff" />
        ) : (
          <Icon name="close" size={15} color="#fff" />
        )}
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
};

export default Toast;
