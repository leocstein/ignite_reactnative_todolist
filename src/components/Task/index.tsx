import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";

import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";

import Status from "../Status";

type Props = {
  title: string;
  status: boolean;
  onRemove: () => void;
  onSetStatus: () => void;
};

export default function Task({ title, status, onRemove, onSetStatus }: Props) {
  return (
    <View style={styles.task}>
      <Status status={status} onSetStatus={onSetStatus} />
      <Text style={styles.taskText}>{title}</Text>

      <TouchableOpacity onPress={onRemove}>
        <EvilIcons name="trash" size={24} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  );
}
