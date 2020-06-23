import React,{Component} from 'react';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import FoodForm from './app/src/foodForm';
import FoodList from './app/src/foodList';
import SignIn from './app/src/signIn';
import SignUp from './app/src/signUp';



import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'native-base';

const MaterialBottomTabs = createMaterialBottomTabNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
        <AuthStack.Screen name='SignUp' component={SignUp}/>
    </AuthStack.Navigator>
)

const Loading = () => {
 return <View><Text>Loading</Text></View>
}


export default class App extends Component {


    componentDidMount(){
        SplashScreen.hide();
        setTimeout(() => {
            this.setState({isLoading: !this.state.isLoading});
            this.setState({user:{}});
        }, 2000)
    }


    state = {
        isLoading: true,
        user: null
}



    render(){
        return(
            <NavigationContainer>
                    {this.state.isLoading ? <Loading/> : this.state.user ? 
                     <MaterialBottomTabs.Navigator
                            initialRouteName="Home"
                            activeColor="#f0edf6"
                            inactiveColor="#3e2465"
                            barStyle={{ backgroundColor: '#7e00ff' }}>
                                        <MaterialBottomTabs.Screen
                                        name="Food Form"
                                        component={FoodForm}
                                        options={{tabBarLabel: 'Add Photo',
                                        tabBarIcon: () => (
                                            <Icon style={[{ color: 'white' }]} size={23} name={'image-plus'} />
                                        ),}}
                                        />
                                        
                                        <MaterialBottomTabs.Screen
                                        name="Food List"
                                        component={FoodList}
                                        options={{tabBarLabel: 'Gallery',
                                        tabBarIcon: () => (
                                            <Icon style={[{ color: 'white' }]} size={26} name={'image-search-outline'} />
                                        ),}}
                                        />
                                        
                                        </MaterialBottomTabs.Navigator>: <AuthStackScreen/>} 
                    
            </NavigationContainer>
        );
    }
}