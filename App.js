import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import ResultsScreen from './screens/ResultsScreen';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/GamesScreen';
import ReportScreen from './screens/ReportScreen';
import ProfileScreen from './screens/ChatScreen';
import QuizScreen from './screens/CenterScreen';
import ConsultScreen from './screens/ConsultScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function CenterButton() {
  return (
    <View style={styles.centerButton}>
      <MaterialIcons name="camera" size={32} color="white" />
    </View>
  );
}

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image source={require('./screens/images/loading.gif')} style={styles.loadingImage} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Games') {
              iconName = 'games';
            } else if (route.name === 'Reports') {
              iconName = 'report';
            } else if (route.name === 'Chat') {
              iconName = 'question-answer';
            }
            else if (route.name === 'X-ray') {
              return <CenterButton />;
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5ca44c',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
            textAlign: 'center',
            marginBottom: 10,
          },
          style: {
            borderTopWidth: 0,
            elevation: 0,
            borderRadius: 15,
            position: 'absolute',
            bottom: 0, // position it at the bottom of the screen
            left: 0, // align it with the left edge
            right: 0, // align it with the right edge
          },
          tabStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            borderRadius: 15,
            height: 50,
            width: 50,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Games" component={SettingsScreen} />
        <Tab.Screen name="X-ray" component={QuizScreen} />
        <Tab.Screen name="Reports" component={ReportScreen} />
        <Tab.Screen
          name="Consult"
          component={ConsultScreen}
          options={{ tabBarButton: () => null, tabBarVisible: false }}
        />

        <Tab.Screen name="Chat" component={ProfileScreen} />
        <Tab.Screen name="Results" component={ResultsScreen} options={{ tabBarButton: () => null, tabBarVisible: false }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <LoadingScreen />;
}

const styles = StyleSheet.create({

  loadingImage: {
    width: "100%",
    height: "100%",
  },
  centerButton: {
    backgroundColor: '#5ca44c',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    zIndex: 999,
  },
  hidden: {
    display: "none",
  }


});
