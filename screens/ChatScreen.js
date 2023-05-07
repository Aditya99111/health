import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';


const ChatScreen = () => {
  const [data ,setData] =useState([])
  const apikey = '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'
  const apiurl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'
  const [textInput , setTextInput] =useState('')

  const handleSend = async () =>{
    const prompt = `You are a health consulatant answer the question accordinly : ${textInput}`
    const response = await axios.post(apiurl,{
      prompt : prompt,
      max_tokens : 500,
      temperature : 0.5,
    },{
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${apikey}`
      }
    })
    const text = response.data.choices[0].text
    setData([...data,{type:'user' , 'text':textInput},{type:'bot','text':text}])
    setTextInput('')
  }
  

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Consult With the doctor</Text>
        <FlatList
          data={data}
          keyExtractor={(item,index) => index.toString()}
          style={styles.body}
          renderItem={({item}) =>(
            <View style={{flexDirection:'row',padding:10}}>
              <Text style={{fontWeight:'bold', color : item.type ==='user' ? 'green' : 'red'}}> {item.type === 'user' ? 'You : ': "Health Doctor : "}</Text>
              <Text style={styles.bot}>{item.text}</Text>
            </View>
          )}
        />
        <TextInput 
        style={styles.input} 
        value={textInput}
        onChangeText = {text => setTextInput(text)}
        placeholder='ask for help'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSend}
        >
          <Text style={styles.buttontext}>Send </Text>
        </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#fff",
height:"100%",
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize:25,
      fontWeight:500,
      marginTop:70,
      marginBottom:30,
    },
    body:{
      backgroundColor:"#eee",
      width:'102%',
      margin:10
    },
    bot:{
      fontSize:16,
      width:"60%",
    },
    input:{
      borderWidth:1,
      borderColor:'black',
      width:"90%",
      height:60,
      marginBottom:10,
      borderRadius:10,
      padding:20
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
 }
  });
  
  export default ChatScreen;
  