import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './tabs.routes';
import {View, Image, StyleSheet} from 'react-native';
import logo from '../assets/logo.png';
import {colors} from '../styles/theme';

const Stack = createStackNavigator();

function CustomHeader() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} resizeMode="contain" />
    </View>
  );
}

function HomeStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.backgroundDark,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTitle: CustomHeader,
        }}>
        <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
  },
});

export default HomeStackNavigator;
