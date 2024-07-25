import React, { useEffect, useRef } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";
import { icons } from "../../../assets/icons";
import { FloatingButton } from "../FloatingButton/FloatingButton";
import { colors } from "../../../assets/colors";

interface Props {
  description: string | undefined;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  modalVisible: boolean;
  handleModal: () => void;
  onPress: () => void;
  title: string | undefined;
}

export const InputModal = (props: Props) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (props.modalVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.modalVisible]);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={props.modalVisible}
      onRequestClose={() => {
        props.handleModal;
        Keyboard.dismiss;
      }}
    >
      <TouchableWithoutFeedback onPress={props.handleModal}>
        <View style={styles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.modalContent}
          >
            <View style={styles.titleTaskModalContainer}>
              <TextInput
                style={{
                  width: "80%",
                  padding: 5,
                  fontSize: 17,
                  fontWeight: "600",
                }}
                id="title"
                placeholder="Titulo..."
                value={props.title}
                onChangeText={(text) => props.setTitle(text)}
              />
              <TouchableOpacity onPress={props.handleModal}>
                <Image source={icons.close} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputsModalContainer}>
              <TextInput
                multiline
                id="description"
                ref={inputRef}
                style={styles.input}
                value={props.description}
                onChangeText={(text) => props.setDescription(text)}
                placeholder="Comprar leche..."
              />
              <FloatingButton
                image={icons.plus}
                onPress={() => {
                  props.onPress();
                  props.handleModal();
                }}
                containerStyle={{
                  backgroundColor: colors.azul1,
                  width: 40,
                  height: 40,
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
