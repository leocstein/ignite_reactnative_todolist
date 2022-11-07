import { useState, useEffect } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import uuid from "react-native-uuid";

import { styles } from "./styles";

import Logo from "../../components/Logo";
import Count from "../../components/Count";
import Task from "../../components/Task";
import ListEmpty from "../../components/ListEmpty";

type Task = {
  id: string;
  title: string;
  status: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Lorem ipsum dolor sit amet", status: true },
    { id: "2", title: "consectetur adipiscing elit", status: false },
    {
      id: "3",
      title: "Nam non neque cursus, mollis felis quis, dignissim odio",
      status: false,
    },
    {
      id: "4",
      title: "Aliquam ut lacus lobortis, faucibus sapien vitae, fringilla nisi",
      status: true,
    },
    {
      id: "5",
      title: "Nullam et nunc vel neque pretium consequat vel in lorem",
      status: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [created, setCreated] = useState<any>();
  const [completed, setCompleted] = useState<any>(0);

  useEffect(() => {
    setCreated(tasks.length);
    countCompletedTask(tasks);
  }, [tasks, created]);

  function handleAddTask(title: string) {
    if (title === "") {
      Alert.alert(
        "Tarefa vazia",
        `Por gentileza, insira a descrição da tarefa`,
        [
          {
            text: "OK",
            style: "cancel",
          },
        ]
      );
    } else {
      setTasks([
        ...tasks,
        { id: uuid.v4().toString(), title: title, status: false },
      ]);
      setTitle("");
      return setCreated(created + 1);
    }
  }

  function handleRemoveParticipant(id: string) {
    var objIndex = tasks.findIndex((task) => task.id === id);

    Alert.alert("Remover", `Remover tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          if (tasks[objIndex].status === true) {
            setCompleted(completed - 1);
          }
          setTasks((tasks) => tasks.filter((task) => task.id !== id));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);

    return setCreated(created - 1);
  }

  function handleSetStatus(id: string) {
    var objIndex = tasks.findIndex((task) => task.id === id);

    if (tasks[objIndex].status !== true) {
      Alert.alert("Finalizar tarefa", `Deseja finalizar a tarefa?`, [
        {
          text: "Sim",
          onPress: () => {
            var objIndex = tasks.findIndex((task) => task.id === id);
            tasks[objIndex].status = !tasks[objIndex].status;
            setTasks(tasks);
            setCompleted(completed + 1);
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    } else {
      Alert.alert("Reabrir a tarefa", `Deseja reabrir a tarefa?`, [
        {
          text: "Sim",
          onPress: () => {
            var objIndex = tasks.findIndex((task) => task.id === id);
            tasks[objIndex].status = !tasks[objIndex].status;
            setTasks(tasks);
            setCompleted(completed - 1);
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    }
  }

  function countCompletedTask(tasks: Task[]) {
    const result = tasks.filter((task) => task.status === true);
    setCompleted(result.length);
  }

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.input}>
        <TextInput
          style={styles.taskInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTitle}
          value={title}
        />

        <TouchableOpacity
          style={styles.buttonAddTask}
          onPress={() => handleAddTask(title)}
        >
          <Text style={styles.buttonAddTaskText}>+</Text>
        </TouchableOpacity>
      </View>

      <Count created={created} completed={completed} />

      <FlatList
        data={tasks}
        keyExtractor={(item: Task) => item.id}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            status={item.status}
            onRemove={() => handleRemoveParticipant(item.id)}
            onSetStatus={() => handleSetStatus(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty />}
      />
    </View>
  );
}
