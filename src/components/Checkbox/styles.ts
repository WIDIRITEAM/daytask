import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#000",
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: "#010101",
  },
  label: {
    fontSize: 16,
  },
});

