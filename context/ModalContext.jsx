// ModalContext.js
import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState("");
  const [editModalVisible, setEditModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openEditModal = (item) => {
    setData(item);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalVisible,
        openModal,
        closeModal,
        editModalVisible,
        openEditModal,
        closeEditModal,
        data,
        setData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
