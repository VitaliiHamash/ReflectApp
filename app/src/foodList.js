import React, { Component } from 'react';
import { Image, View,FlatList } from 'react-native';


import { connect } from 'react-redux';
import { deleteFood } from './actions/food';

import { styles } from './styles/styles' 


class FoodList extends Component {
  render() {
    return (
      <View style={styles.container}>
                 <FlatList 
        data={this.props.foods}
        renderItem={(data) => <Image style={{width:300, height:300}} source={{uri:data.item.name}}/>}
        />
        </View>
        
 
    )
  }
}


const mapStateToProps = (state)=> {
  return {
      foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      delete: (key) => dispatch(deleteFood(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)