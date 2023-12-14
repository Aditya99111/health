import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CenterScreen = ({ navigation }) => {
  const [result, setResult] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const getRandomResult = () => 'Positive';


  const pickImage = async () => {
    let result = getRandomResult();

    let pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickedImage.cancelled) {
      setImage(pickedImage.uri);

      // Simulate result after 3 seconds
      setTimeout(() => {
        setResult(result);

        // If the result is positive, navigate to the "Consult" screen after an additional second
        if (result === 'Positive') {
          setTimeout(() => {
            navigation.navigate('Consult');
          }, 1000);
        }
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pneumonia Detection</Text>
      <Text style={styles.subheading}>Upload an image of your chest X-ray</Text>

      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300, margin: 20 }} />}

      {result !== '' && <Text style={styles.text}>Result: {result}</Text>}
      {result === 'Positive' && (
        <View>
        <Text>Please consult a doctor</Text>
        <Button title="Book Slot" onPress={() => navigation.navigate('ConsultScreen')} />
      </View>)}
    </View>
  );
};

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

export default CenterScreen;
