import React, { Component } from 'react'
import { View,Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
import { addFood } from  './actions/food';


class FoodForm extends Component {
  
  state = {
    food: null
  }
  
  handleChooseImage = () => {

    const options = {
      noData:true,
    }; 
    ImagePicker.launchImageLibrary(options, response => {
      
      if(response.uri){
        this.setState({food:response.uri});
        console.log(this.state)
        this.props.add(this.state.food)
      }
    })

  }

  render() {
    
    return (
      
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            

            <Button
                title="Choose Image"
                onPress={this.handleChooseImage}
            
            />
      </View>
    )
  }
}

const  mapStateToProps = (state) => {
  console.log(state);
  return {
      foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      add: (food) => dispatch(addFood(food)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);