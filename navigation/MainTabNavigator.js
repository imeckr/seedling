import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import FindScreen from '../screens/FindScreen';
import MessengerScreen from '../screens/MessengerScreen';
import CameraScreen from '../screens/CameraScreen';
import AddPlant from '../screens/AddPlant';
import HealthScreen from '../screens/HealthScreen';
import PlantScreen from '../screens/PlantScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileScreen,
        Camera: CameraScreen,
        AddPlant: AddPlant,
        PlantScreen: PlantScreen,
    },
    config
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-person'
                    : 'md-person'
            }
        />
    ),
};

ProfileStack.path = '';

const DiscoverStack = createStackNavigator(
    {
        Discover: DiscoverScreen,
    },
    config
);

DiscoverStack.navigationOptions = {
    tabBarLabel: 'Discover',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-leaf' : 'md-leaf'}/>
    ),
};

DiscoverStack.path = '';

const FindStack = createStackNavigator(
    {
        Find: FindScreen,
    },
    config
);

FindStack.navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-leaf' : 'md-leaf'}/>
    ),
};

FindStack.path = '';

const MessengerStack = createStackNavigator(
    {
        Messenger: MessengerScreen,
    },
    config
);

MessengerStack.navigationOptions = {
    tabBarLabel: 'Messenger',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}/>
    ),
};

MessengerStack.path = '';

const HealthStack = createStackNavigator(
    {
        Health: HealthScreen,
        Camera: CameraScreen,
    },
    config
);

HealthStack.navigationOptions = {
    tabBarLabel: 'Health',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pulse' : 'md-pulse'}/>
    ),
};

HealthStack.path = '';


const tabNavigator = createBottomTabNavigator({
    ProfileStack,
    HealthStack,
    FindStack,
    MessengerStack,
});

tabNavigator.path = '';

export default tabNavigator;
