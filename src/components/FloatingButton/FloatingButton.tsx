import React from "react";
import { Image, StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./styles";

interface Props {
  onPress: () => void;
  image: HTMLImageElement;
  containerStyle?: StyleProp<ViewStyle>;
}

export const FloatingButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}
    >
      <Image source={props.image} style={styles.image} />
    </TouchableOpacity>
  );
};
