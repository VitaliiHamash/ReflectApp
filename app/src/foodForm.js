import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
import { addImage } from  './actions/image';

import {Container, Content, H1} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class FoodForm extends Component {




  state = {
    image: null
  }
  
  handleChooseImage = () => {

    const options = {
      title:'Choose from...',
      takePhotoButtonTitle:'Camera',
      chooseFromLibraryButtonTitle: 'Library',

      noData:true,
    }; 
    
    getTime = () => {
      currentDate = new Date().getDate()
      month = new Date().getMonth() + 1
      year = new Date().getFullYear()
      hours = new Date().getHours()
      minute = new Date().getMinutes()
      seconds = new Date().getSeconds()
      return currentDate + '/' + month + '/' + year + ' ' + hours + ':' + minute + ':' + seconds; 
    } 
    
    ImagePicker.showImagePicker(options, response => {
      if(response.uri){
        this.setState({image:{uri:response.uri, date:getTime()}});
        
        this.props.add(this.state.image)
        
      }
    })
    


    }



  render() {
    
    return (
      
      <Container style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            
          <Content>
                <Icon style={[{ color: 'black', marginTop:130}]} size={250} name={'image-plus'} onPress={this.handleChooseImage} />
                <H1 onPress={this.handleChooseImage} >Upload photo...</H1>
          </Content>
            
      </Container>
    )
  }
}







const  mapStateToProps = (state) => {
  console.log(state);
  
  return {
      images: state.imageReducer.imageList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      add: (image) => dispatch(addImage(image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);