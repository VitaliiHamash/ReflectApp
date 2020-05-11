import React,{Component} from 'react';

//import AddPhoto from './app/src/addPhoto';
//import Gallery from './app/src/Gallery';
import FoodForm from './app/src/foodForm';
import FoodList from './app/src/foodList';

import {NavigationContainer} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';




const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends Component {
    render(){
        return(
            <NavigationContainer>
                    
                    <MaterialBottomTabs.Navigator>
                        <MaterialBottomTabs.Screen name="Food Form" component={FoodForm}/>
                        
                        <MaterialBottomTabs.Screen name="Food List" component={FoodList}/>
                     </MaterialBottomTabs.Navigator>
                    
            </NavigationContainer>
        );
    }
}