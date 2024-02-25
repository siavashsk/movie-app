import { View, Modal, TextInput, Text, Pressable } from "react-native";
import styles from "./styles";
import { useRef } from "react";
import { useModal } from "../../context/ModalContext";
import Icon from "react-native-vector-icons/FontAwesome";
import { Formik } from "formik";
import * as yup from "yup";
import { useToast } from "../../context/ToastContext";
import axios from "axios";
import InputText from "../inputText";

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

const AddModal = () => {
  const isSubmittingRef = useRef(false);
  const { modalVisible, closeModal } = useModal();
  const { showToast } = useToast();

  const handleSubmit = async (values) => {
    if (isSubmittingRef.current) return; // If already submitting, do nothing
    isSubmittingRef.current = true; // Set submitting flag to true

    try {
      const data = {
        title: values.title,
        author: values.author,
        genre: values.genre,
        yearPublished: parseInt(values.yearPublished),
      };
      await axios
        .post("http://localhost:8010/proxy/books", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          showToast("Added new book", "ok");
          closeModal();
        });
    } catch (error) {
      showToast("Failed to add new book", "not");
      closeModal();
    }
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <Formik
            initialValues={{
              title: "",
              author: "",
              genre: "",
              yearPublished: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Add Your Book</Text>
                <InputText
                  placeholder="Enter title"
                  value={values.title}
                  onBlur={handleBlur("title")}
                  onChangeText={handleChange("title")}
                />
                {errors.title && (
                  <Text style={styles.error}>{errors.title}</Text>
                )}
                <InputText
                  placeholder="Enter author"
                  value={values.author}
                  onBlur={handleBlur("author")}
                  onChangeText={handleChange("author")}
                />
                {errors.author && (
                  <Text style={styles.error}>{errors.author}</Text>
                )}
                <InputText
                  placeholder="Enter genre"
                  value={values.genre}
                  onBlur={handleBlur("genre")}
                  onChangeText={handleChange("genre")}
                />
                {errors.genre && (
                  <Text style={styles.error}>{errors.genre}</Text>
                )}
                <InputText
                  placeholder="Enter year published"
                  value={values.yearPublished}
                  onBlur={handleBlur("yearPublished")}
                  onChangeText={handleChange("yearPublished")}
                />
                {errors.yearPublished && (
                  <Text style={styles.error}>{errors.yearPublished}</Text>
                )}

                <Pressable style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Create</Text>
                </Pressable>

                <Pressable style={styles.closeButton} onPress={closeModal}>
                  <Icon name="close" size={25} color="#777" />
                </Pressable>
              </View>
            )}
          </Formik>
        </View>
      </Modal>
    </View>
  );
};
export default AddModal;