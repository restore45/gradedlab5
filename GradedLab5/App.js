import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,FlatList,StyleSheet,} from "react-native";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]); 

  const addTask = () => {
    if (taskText.trim() === "") return;
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

 
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleTask(item.id)}>
        <Text style={styles.checkbox}>{item.done ? "☑️" : "⬜"}</Text>
      </TouchableOpacity>

      <Text
        style={[styles.taskText, item.done && styles.taskTextDone]}
        onPress={() => toggleTask(item.id)}
      >
        {item.text}
      </Text>

      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
  
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      </View>

     
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  inputRow: { flexDirection: "row", marginBottom: 10 },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "white",
  },
  addButton: {
    marginLeft: 5,
    backgroundColor: "blue",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    elevation: 1,
  },
  taskText: { flex: 1, fontSize: 16 },
  taskTextDone: { textDecorationLine: "line-through", color: "#888" },
  checkbox: { fontSize: 20, marginRight: 10 },
  deleteButton: { fontSize: 20, marginLeft: 10 },
});
