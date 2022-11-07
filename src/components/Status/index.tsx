import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";

import { AntDesign, Entypo } from "@expo/vector-icons";

type Props = {
  status: boolean;
  onSetStatus: () => void;
};

export default function Status({ status, onSetStatus }: Props) {
  return status !== true ? (
    <>
      <TouchableOpacity onPress={onSetStatus}>
        <Entypo name="circle" size={24} color="#4EA8DE" />
      </TouchableOpacity>
    </>
  ) : (
    <>
      <TouchableOpacity onPress={onSetStatus}>
        <AntDesign name="checkcircle" size={24} color="#5E60CE" />
      </TouchableOpacity>
    </>
  );
}
