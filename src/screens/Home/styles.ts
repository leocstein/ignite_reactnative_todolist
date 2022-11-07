import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
  },

  input: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: -26,
  },
  taskInput: {
    flex: 1,
    height: 54,
    borderRadius: 5,
    color: "#F2F2F2",
    backgroundColor: "#333333",
    padding: 10,
  },
  buttonAddTask: {
    height: 52,
    width: 52,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  buttonAddTaskText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
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
