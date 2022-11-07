import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  countTaskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 10,
  },
  countCreatedTaskContainer: {
    flexDirection: "row",
    marginTop: 32,
    alignItems: "center",
  },
  countCreatedText: {
    fontSize: 20,
    color: "#4EA8DE",
    marginRight: 8,
  },
  countCompletedTaskContainer: {
    flexDirection: "row",
    marginTop: 32,
    alignItems: "center",
  },
  countCompletedText: {
    fontSize: 20,
    color: "#8284FA",
    marginRight: 8,
  },
  countNumber: {
    height: 20,
    width: 25,
    fontSize: 14,
    borderRadius: 10,
    color: "#FFF",
    backgroundColor: "#333333",
    padding: 2,
    textAlign: "center",
  },
});
