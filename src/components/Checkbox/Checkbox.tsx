import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Props {
  checked: boolean;
  onPress: () => void;
}

export const Checkbox = (props: Props) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={props.onPress}>
      <View style={[styles.checkbox, props.checked && styles.checked]}>
        {props.checked && <View style={styles.checkmark} />}
      </View>
    </TouchableOpacity>
  );
};
