import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';

const NewsSection = () => {
  const [collapsed, setCollapsed] = useState(true);
  
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleCollapse}>
        <Text style={styles.title}>Latest News</Text>
        <MaterialCommunityIcons name={collapsed ? 'chevron-down' : 'chevron-up'} size={24} color="black" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>Breaking News!</Text>
          <Text style={styles.newsContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>
        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>corona </Text>
          <Text style={styles.newsContent}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </View>
        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>malaria</Text>
          <Text style={styles.newsContent}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  newsContainer: {
    marginVertical: 10,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsContent: {
    fontSize: 14,
  },
});
