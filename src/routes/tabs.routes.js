import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DailyMeeting from '../pages/DailyMeeting';
import Profile from '../pages/Profile';
import ShareLink from '../pages/ShareLink';
import {theme} from '../styles/theme';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Daily"
      tabBarOptions={{
        style: {backgroundColor: theme.backgroundMedium},
        activeTintColor: theme.primary,
        inactiveTintColor: theme.backgroundLight,
      }}>
      <Tab.Screen
        name="Daily"
        component={DailyMeeting}
        options={{
          tabBarLabel: 'Daily Meeting',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-edit" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Share"
        component={ShareLink}
        options={{
          tabBarLabel: 'Compartilhar',
          tabBarIcon: ({color, size}) => (
            <Icon name="share" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
