


import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const ReportScreen = () => {
  const [webViewVisible, setWebViewVisible] = useState(true);

  const handleCloseWebView = () => {
    setWebViewVisible(false);
  };

  return (
    <View style={styles.container}>
      {webViewVisible ? (
        <WebView
          source={{ uri: 'https://www.calculator.net/bmi-calculator.html' }}
          style={{ flex: 1 }}
        />
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={handleCloseWebView}
        >
          <Text style={styles.buttonText}>Close Website</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#efefef',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default ReportScreen;