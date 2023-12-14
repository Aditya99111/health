
import { useNavigation } from "@react-navigation/native";

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import questions from './data/questions';

const GamesScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswerIndex) => {
    if (selectedAnswerIndex === questions[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuiz = () => {
    if (currentQuestion < questions.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.question}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <View key={index} style={styles.optionContainer}>
            <Button
              title={`${option.option}. ${option.answer}`}
              onPress={() => handleAnswer(index)}
            />
          </View>
          ))}
        </View>
      );
    } else {
      // Quiz completed
      return (
        <View style={styles.container}>
          <Text style={styles.result}>Quiz Completed!</Text>
          <Text style={styles.result}>Your Score: {score} / {questions.length}</Text>
        </View>
      );
    }
  };

  return renderQuiz();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  optionContainer: {
    marginBottom: 10, // Add margin between options
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GamesScreen;