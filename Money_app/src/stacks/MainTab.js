import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Register from "../screens/Register";
import Dashboard from '../screens/Dashboard';
import Profile from "../screens/Profile";
import RegisterUpdate from "../screens/RegisterUpdate";

import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator initialRouteName="Dashboard" tabBar={props=><CustomTabBar {...props}/>} screenOptions={{headerShown: false}}>
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Dashboard" component={Dashboard}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="RegisterUpdate" component={RegisterUpdate}/>
    </Tab.Navigator>
);
