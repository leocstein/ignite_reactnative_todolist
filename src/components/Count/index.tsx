import { View, Text, Image } from "react-native";
import React from "react";

import { styles } from "./styles";

type Props = {
  created: number;
  completed: number;
}

export default function Logo({created, completed} : Props) {
  return (
    <View style={styles.countTaskContainer}>
      <View style={styles.countCreatedTaskContainer}>
        <Text style={styles.countCreatedText}>Criadas</Text>
        <Text style={styles.countNumber}>{created}</Text>
      </View>

      <View style={styles.countCompletedTaskContainer}>
        <Text style={styles.countCompletedText}>Concluidas</Text>
        <Text style={styles.countNumber}>{completed}</Text>
      </View>
    </View>
  );
}
