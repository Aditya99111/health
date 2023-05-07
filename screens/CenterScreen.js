import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CenterScreen() {
  const [assurity, setAssurity] = useState('');
  const [result, setResult] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setResult('');
      setTimeout(() => {
        fetch('https://adityamittl.pythonanywhere.com/result')
          .then((response) => response.json())
          .then((data) => {
            setResult(data.result);
            setAssurity(data.assurity);
          })
          .catch((error) => console.error(error));
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pneumonia detection</Text>
      <Text style={styles.subheading}>Upload a image of your chest X-ray</Text>

      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300, margin: 20 }} />}

      {result !== '' && <Text style={styles.text}>Result: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});
