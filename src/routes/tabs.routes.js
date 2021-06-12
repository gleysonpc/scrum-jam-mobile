import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DailyMeeting from '../pages/DailyMeeting';
import Profile from '../pages/Profile';
import ShareLink from '../pages/ShareLink';
import {colors} from '../styles/theme';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Daily"
      tabBarOptions={{
        style: {
          backgroundColor: colors.backgroundDark,
          borderTopColor: colors.backgroundMedium,
        },
        activeTintColor: colors.primary,
        inactiveTintColor: colors.backgroundLight,
        labelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Daily"
        component={DailyMeeting}
        options={{
          tabBarLabel: 'Daily Meeting',
          tabBarIcon: ({color}) => (
            <Icon name="account-group" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <Icon name="account-edit" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Share"
        component={ShareLink}
        options={{
          tabBarLabel: 'Compartilhar',
          tabBarIcon: ({color}) => (
            <Icon name="share" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
