import React, {Component} from 'react';
import {
    Text,
    FlatList,
    View
    } from 'react-native';
import { connect } from 'react-redux';
import { deleteFood } from '../actions/food';

import { styles } from '../styles/styles' 

class FoodList extends Component {
  render() {
    return (
        <View style={styles.container}>
        <FlatList
        data={this.props.foods}
        renderItem={(data) => <Text>{data.item.name}</Text>}
        />
        </View>
        
    );
  }
};

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