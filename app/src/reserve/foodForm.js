import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    Button} from 'react-native'
import { connect } from 'react-redux';
import { addFood } from  '../actions/food';

import { styles } from '../styles/styles'
 
class FoodForm extends Component {
    state = {
        food: null
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Add Image</Text>
                <TextInput
                    value={this.state.food}
                    placeholder='Name'
                    style={styles.foodInput}
                    onChangeText={(food) => this.setState({food}) && console.log(this.state) }
                />
                <Button
                    title='Submit'
                    color='black'
                    onPress={() => this.props.add(this.state.food)}
                />
                <Button
                    title='Go to Gallery'
                    onPress={() =>
                        this.props.navigation.navigate('Gallery')}
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