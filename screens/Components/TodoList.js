import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TodoItem = ({ item, deleteTodo }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.text}</Text>
      <TouchableOpacity onPress={() => deleteTodo(item.id)}>
        <AntDesign name="delete" size={24} color="#5ca44c" />
      </TouchableOpacity>
    </View>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.length > 0) {
      setTodos([...todos, { id: Date.now(), text }]);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Todo"
          placeholderTextColor="#8a8a8a"
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <TouchableOpacity style={styles.button} onPress={() => addTodo()}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.todoList}>
        {todos.map((item) => (
          <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5ca44c',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#5ca44c',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#5ca44c',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 10,
  },
  todoList: {
    width: '100%',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#8a8a8a',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  todoText: {
    fontSize: 16,
    color: '#000',
  },
});

export default TodoList;