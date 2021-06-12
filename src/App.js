import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import HomeStackNavigator from './routes/stack.routes';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {colors} from './styles/theme';

export default function App() {
  return (
    <Fragment>
      <StatusBar
        animated={true}
        backgroundColor={colors.backgroundDark}
        barStyle="light-content"
      />
      <SafeAreaView style={styles.iphoneStatusBarFix} />
      <SafeAreaView style={styles.container}>
        <HomeStackNavigator />
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  iphoneStatusBarFix: {
    backgroundColor: colors.backgroundDark,
  },
});
