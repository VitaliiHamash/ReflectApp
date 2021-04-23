import React,{Component} from 'react';
import SplashScreen from 'react-native-splash-screen';


import ImageForm from './src/components/imageForm';
import ImageList from './src/components/imageList';


import {NavigationContainer} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends Component {
    
    componentDidMount(){
        SplashScreen.hide();
    }
    
    render(){
        return(
            <NavigationContainer>
                <MaterialBottomTabs.Navigator
                    initialRouteName="Home"
                    activeColor="#f0edf6"
                    inactiveColor="#3e2465"
                    barStyle={{ backgroundColor: '#7e00ff' }}>
                                <MaterialBottomTabs.Screen
                                name="Image Form"
                                component={ImageForm}
                                options={{tabBarLabel: 'Add Photo',
                                tabBarIcon: () => (
                                    <Icon style={[{ color: 'white' }]} size={23} name={'image-plus'} />
                                ),}}
                                />
                                
                                <MaterialBottomTabs.Screen
                                name="Image List"
                                component={ImageList}
                                options={{tabBarLabel: 'Gallery',
                                tabBarIcon: () => (
                                    <Icon style={[{ color: 'white' }]} size={26} name={'image-search-outline'} />
                                ),}}
                                />
                </MaterialBottomTabs.Navigator>
            </NavigationContainer>
        );
    }
}