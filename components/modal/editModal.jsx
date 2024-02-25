import { useState } from "react";
import { View, Modal, Switch, Text, Pressable, TextInput } from "react-native";
import styles from "./styles";
import { useModal } from "../../context/ModalContext";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as yup from "yup";
import { useToast } from "../../context/ToastContext";
import axios from "axios";

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  genre: yup.string().required("Genre is required"),
  yearPublished: yup
    .number()
    .required("Year is required")
    .positive("Year must be a positive number")
    .integer("Year must be an integer"),
});

const EitModal = () => {
  const { editModalVisible, closeEditModal, data } = useModal();
  const { showToast } = useToast();

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const handleFormSubmit = async (values) => {
    const body = {
      title: values.title,
      author: values.author,
      genre: values.genre,
      yearPublished: parseInt(values.yearPublished),
      checkedOut: values.checkedOut,
    };
    try {
      await axios.patch(`http://localhost:8010/proxy/books/${data.id}`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      showToast("Updated successfuly", "ok");
      closeEditModal();
    } catch (error) {
      showToast("Failed to update book", "not");
      closeEditModal();
    }
  };
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={closeEditModal}
      >
        <Formik
          initialValues={{
            title: data.title,
            author: data.author,
            genre: data.genre,
            yearPublished: data.yearPublished,
            checkedOut: data.checkedOut,
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={styles.centeredView}>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  width: 300,
                  height: 500,
                  padding: 20,
                  alignItems: "center",
                  elevation: 5,
                }}
              >
                <Text style={styles.modalText}>Edit Book</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Enter title"
                  value={values.title}
                  onBlur={handleBlur("title")}
                  onChangeText={handleChange("title")}
                />
                {errors.title && (
                  <Text style={styles.error}>{errors.title}</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholder="Enter author"
                  value={values.author}
                  onBlur={handleBlur("author")}
                  onChangeText={handleChange("author")}
                />
                {errors.author && (
                  <Text style={styles.error}>{errors.author}</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholder="Enter genre"
                  value={values.genre}
                  onBlur={handleBlur("genre")}
                  onChangeText={handleChange("genre")}
                />
                {errors.genre && (
                  <Text style={styles.error}>{errors.genre}</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholder="Enter year published"
                  value={values.yearPublished}
                  onBlur={handleBlur("yearPublished")}
                  onChangeText={handleChange("yearPublished")}
                />
                {errors.yearPublished && (
                  <Text style={styles.error}>{errors.yearPublished}</Text>
                )}

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Text>Checked out :</Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>

                <Pressable
                  style={{
                    marginTop: 30,
                    width: "96%",
                    backgroundColor: "#3798db",
                    padding: 10,
                    borderRadius: 5,
                  }}
                  onPress={handleSubmit}
                >
                  <Text style={styles.submitButtonText}>Confirm</Text>
                </Pressable>

                <Pressable style={styles.closeButton} onPress={closeEditModal}>
                  <Icon name="close" size={25} color="#777" />
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </Modal>
    </View>
  );
};

export default EitModal;
