import React from 'react';
import { WebView } from 'react-native-webview';

const ConsultScreen = () => {
  const consultUrl =
    'https://www.practo.com/search/doctors?results_type=doctor&q=%5B%7B%22word%22%3A%22pneumonia%20treatment%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22service%22%7D%5D&city=Bangalore';

  return <WebView source={{ uri: consultUrl }} />;
};

export default ConsultScreen;