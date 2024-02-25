import React, { createContext, useContext, useState } from "react";
import Toast from "../components/toast";

// Create a context for managing toast messages
const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const showToast = (msg, type) => {
    setMessage(msg);
    setType(type);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide the toast after 5 seconds
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {isVisible && <Toast message={message} type={type} />}
    </ToastContext.Provider>
  );
};
