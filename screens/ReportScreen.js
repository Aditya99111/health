import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,ImageBackground} from 'react-native';
import axios from 'axios';
const backgroundImage = require('./images/crs.png');

const ReportScreen = () => {
  const apikey = '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';
  const apiurl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [report, setReport] = useState('');

  const handleRequest = async () =>{
    const prompt = `My height is ${height}, weight is ${weight} and age is ${age} calulate my bmi, give me suggestion on how can i imporve, suggest me exercise and a diet. create a 500 word report`;
    const response = await axios.post(apiurl,{
      prompt : prompt,
      max_tokens : 1000,
      temperature : 0.5,
    },{
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${apikey}`
      }
    })
    const text = response.data.choices[0].text;
    setReport(text);
  }
  
  return (

    <ImageBackground source={backgroundImage} style={{flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',}}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Request Health Report</Text>
      <TextInput 
        style={styles.input} 
        value={height}
        onChangeText = {text => setHeight(text)}
        placeholder='Enter your height'
        placeholderTextColor="#FFF"
      />
      <TextInput 
        style={styles.input} 
        value={age}
        onChangeText = {text => setAge(text)}
        placeholder='Enter your age'
        placeholderTextColor="#FFF"
      />
      <TextInput 
        style={styles.input} 
        value={weight}
        onChangeText = {text => setWeight(text)}
        placeholder='Enter your weight'
        placeholderTextColor="#FFF"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleRequest}
      >
        <Text style={styles.buttontext}>Request Report</Text>
      </TouchableOpacity>
      {report !== '' && (
        <View style={styles.report}>
          <Text style={styles.reportTitle}>Health Report</Text>
          <Text>{report}</Text>
        </View>
      )}
    </View>
    </ScrollView>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:25,
    fontWeight:500,
    marginTop:70,
    marginBottom:30,
    color:"#fff",
  },
  input:{
    borderWidth:1,
    borderColor:'#fff',
    width:"90%",
    height:60,
    marginBottom:10,
    borderRadius:10,
    padding:20,
    color:"#fff"
  },
  button:{
    backgroundColor:'#efefef',
    width:"60%",
    height :60,
    borderRadius:10,
    justifyContent:"center",
    alignItems:'center',
    marginBottom:30
  },
  buttontext:{
    fontSize:25,
    fontWeight:"bold",
    color:"blue"
  },
  report:{
    marginTop: 50,
    backgroundColor:"#eee",
    padding:20,
    borderRadius:10,
    width:"90%",
    alignItems:"center",
  },
  reportTitle:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom: 10,
  }
});

export default ReportScreen;
