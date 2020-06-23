import React, { Component } from 'react'
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
import { addFood } from  './actions/food';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { addAllFoods } from './actions/food'  
export const FOOD_STORE_KEY = 'foods';

class FoodForm extends Component {


  state = {
    food: null,
    foodStore:null
    
  }


componentDidMount(){
  this.loadStorageData()
}
 

loadStorageData = async () =>{
try{
const foods = await AsyncStorage.getItem(FOOD_STORE_KEY)

if(foods !== null) {
  
  this.setState({foodStore:JSON.parse(foods)})
  console.log(this.state.foodStore)
  this.props.add(this.state.foodStore)
  
}
} catch(e) {
console,log(e)
}
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


    storeFoodLocal = async () => {

      try{

        const storeFood = await AsyncStorage.getItem(FOOD_STORE_KEY)
       
         let newFoods = JSON.parse(storeFood) || []
         
         newFoods.push(this.state.food);
         console.log(newFoods)
         await AsyncStorage.setItem(FOOD_STORE_KEY, JSON.stringify(newFoods))
        
      }catch(e){
        console.log(e);
      }
  
        
 
    }
    
    ImagePicker.showImagePicker(options, response => {
      if(response.uri){
        
        this.setState({food:{image:response.uri, date:getTime(), key: Math.random()}});
        storeFoodLocal()
        console.log(this.state)
        this.props.add(this.state.food)

      }
    })
    


    }



  render() {
    
    return (
      
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
            
          
                <Icon style={[{ color: 'black', marginTop:130}]} size={250} name={'image-plus'} onPress={this.handleChooseImage} />
                
                <Button
                   onPress={this.handleChooseImage}
                   title='Upload photo...'
                   titleStyle={{fontSize:32}}
                   type='clear'
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
      add: (food) => dispatch(addFood(food)),
      all:(foodStore) => dispatch(addAllFoods(foodStore))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);