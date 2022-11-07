import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    backgroundColor: "#333333",
    height: 64,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 24,
    alignItems: "center",
  },
  taskText: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
    paddingLeft: 8,
  },
});
