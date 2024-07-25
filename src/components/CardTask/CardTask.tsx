import React from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Checkbox } from "../Checkbox/Checkbox";
import { Task } from "../../interfaces/tasks";
import { Swipeable } from "react-native-gesture-handler";

interface CardTaskProps extends Task {
  onEdit: () => void;
  onDelete: () => void;
}

export const CardTask = (props: CardTaskProps) => {
  const deleteAction = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [-100, -50, 0, 1],
      outputRange: [1, 0, 0, -20],
    });
    const opacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return (
      <TouchableOpacity onPress={props.onDelete}>
        <Animated.View
          style={[
            styles.deleteAction,
            { transform: [{ translateX: trans }], opacity },
          ]}
        >
          <Text style={styles.swipeableText}>Eliminar</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const editAction = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    const opacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    return (
      <TouchableOpacity onPress={props.onEdit}>
        <Animated.View
          style={[
            styles.editAction,
            { transform: [{ translateX: trans }], opacity },
          ]}
        >
          <Text style={styles.swipeableText}>Editar</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderLeftActions={editAction} renderRightActions={deleteAction}>
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{props.title ? props.title : "-"}</Text>
          <Text style={styles.description}>
            {props.description ? props.description : "-"}
          </Text>
        </View>
        <Checkbox checked={false} onPress={() => {}} />
      </View>
    </Swipeable>
  );
};
