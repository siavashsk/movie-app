import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const Book = ({ item, openEditModal, handleDelete }) => {
  return (
    <View style={styles.container} key={item.id}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>Author: {item.author}</Text>
        <Text>
          Genre: <Text style={styles.genre}>{item.genre}</Text>
        </Text>
        <Text>
          Year Published:{" "}
          <Text style={styles.yearPublished}>{item.yearPublished}</Text>
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Icon
            name="pencil"
            size={15}
            color="#3256A4"
            style={[
              styles.icon,
              {
                padding: 6,
                borderColor: "blue",
                backgroundColor: "#AECCEC",
              },
            ]}
            onPress={() => {
              openEditModal(item);
            }}
          />
          <Icon
            name="trash"
            size={15}
            style={[
              styles.icon,
              {
                paddingHorizontal: 8,
                borderColor: "red",
                paddingVertical: 6,
                backgroundColor: "#ECBEBF",
              },
            ]}
            color="#C74444"
            onPress={() => handleDelete(item.id)}
          />
        </View>
      </View>
    </View>
  );
};

export default Book;
