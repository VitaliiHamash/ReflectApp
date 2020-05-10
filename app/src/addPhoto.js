import React, { Component } from 'react'
import { Text, View,Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import styles from './styles/styles'
export default class AddPhoto extends Component {

  state = {
    photo: null
  }
  
  handleChooseImage = () => {

    const options = {
      noData:true,
    }; 
    ImagePicker.launchImageLibrary(options, response => {
      
      if(response.uri){
        this.setState({photo:response});
        console.log(this.state)
      }
    })

  }


  render() {
    
    return (
      
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            {this.state.photo && (
              <Image
                source={{uri:this.state.photo.uri}}
                style={{width:300, height:300}}
                />
            )}

            <Button
                title="Choose Image"
                onPress={this.handleChooseImage}
            
            />
      </View>
    )
  }
}