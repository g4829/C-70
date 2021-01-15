import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-header';

export default class WriteStoryScreen extends Component{
    constructor(){
        super();
        this.state={
            titleOfTheStory: '',
            authorOfTheStory: '',
            writeTheStory: ''
        }
    }

    render(){
        return(
    <Header
    centerComponent={{text: 'StoryHub',style: {color: '#ff5633'}}}
    />
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.buttonContainer}>
                    <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold',marginLeft:55}}>TITLE OF THE STORY</Text>
                    <TextInput style={styles.input}
                    keyboardType="default"
                    onChangeText={(text)=>{
                        this.setState({
                            titleOfTheStory: text
                        })
                    }}/>
                    </View>

                    <View style={styles.buttonContainer}>
                    <Text style={{color:'#ff5732', fontSize:18, fontWeight:'bold',marginLeft:55}}>AUTHOR OF THE STORY</Text>
                    <TextInput style={styles.input}
                    keyboardType="default"
                    onChangeText={(text)=>{
                        this.setState({
                            authorOfTheStory: text
                        })
                    }}/>
                    </View>

                    <View style={styles.buttonContainer}>
                    <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold',marginLeft:55}}>WRITE THR STORY</Text>
                    <TextInput style={styles.input}
                    keyboardType="default"
                    onChangeText={(text)=>{
                        this.setState({
                            writeTheStory: text
                        })
                    }}/>
                    </View>
                    
                    <TouchableOpacity
              style={styles.button}
              onPress={()=>{this.text(this.state.titleOfTheStory,this.state.authorOfTheStory,this.writeTheStory)}}
              >
              <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>SUBMIT</Text>
            </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });