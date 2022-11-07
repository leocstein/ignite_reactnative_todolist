import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});
