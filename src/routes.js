import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

//pages
import Home from './pages/Home';
import Cars from './pages/Cars';
import Trip from './pages/TripCompleted';
import Reverse from './pages/Reverse';
import BookNow from './pages/BoolNow';

const Bottom = createBottomTabNavigator({
  Home: { 
    screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} size={18}/>
        }
    },
  Cars: {  
    screen: Cars,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="car" color={tintColor} size={18}/>
        }
  },
  Profile:{
      screen: Reverse,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="user-circle-o" color={tintColor} size={18}/>
    }
  },
},{
  
  initialRouteName: 'Home',

  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel: false ,
    style: {
      backgroundColor: '#F8F8F8',
      height:59,
      paddingVertical:12
    },
  }
});

const RootStack = createStackNavigator({ 
    Bottom,
    BookNow,
    Trip,    
    
},
  {
    defaultNavigationOptions: {

        header: null
    },

});

const AppContainer = createAppContainer(RootStack);



export default AppContainer;
