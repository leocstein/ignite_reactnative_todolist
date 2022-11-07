import { View, Text, Image } from "react-native";
import React from "react";

import { styles } from "./styles";

export default function ListEmpty() {
  return (
    <View style={styles.clipboardContainer}>
      <Image
        source={require("../../assets/Clipboard.png")}
        style={styles.clipboardLogo}
      />
      <Text style={styles.clipboardTextBold}>
        Você ainda não tem tarefas cadastradas{" "}
      </Text>
      <Text style={styles.clipboardText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
