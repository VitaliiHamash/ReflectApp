import React, { Component } from 'react';
import { Image, FlatList, View } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { deleteFood } from './actions/food';
import { styles } from './styles/styles'
import { Text } from 'react-native-elements'




class FoodList extends Component {









  keyExtrtactor = (item, index) => index.toString()

  renderItem = ((data) => <View>
                                <Image style={{width:400, height:400}} source={{uri:data.item.image}}/>
                                <View style={styles.photoList}>
                                    <Icon style={[{ color: 'black', marginBottom:15,marginLeft:10}]}
                                          size={32} name={'delete'}
                                          onPress={() => this.props.delete(data.item.key)}/>
                                    <Text style={{textAlign: 'right', marginRight:10,marginBottom:15,marginLeft:10}}>{data.item.date}</Text>
                                </View>
                          </View>
               )


render() {
  //console.log(this.props)
    return (
      <View style={styles.container}>
          <FlatList
            keyExtractor={this.keyExtrtactor}
            data={this.props.foods}
            renderItem={this.renderItem}
          />
      </View>
        
 
    )
  }
}


const mapStateToProps = (state) => {
  return {
      foods: state.foodReducer.foodList
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
      delete: (key) => dispatch(deleteFood(key)),
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)