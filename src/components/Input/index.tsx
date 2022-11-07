import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";

export default function Input() {
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.taskInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={title}
        onChangeText={setTitle}
      />

      <TouchableOpacity style={styles.buttonAddTask} onPress={onAddTask}>
        <Text style={styles.buttonAddTaskText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
