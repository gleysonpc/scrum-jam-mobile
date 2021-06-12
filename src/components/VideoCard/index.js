import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../styles/theme';

export default function VideoCard() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>SJ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    margin: 5,
    width: Dimensions.get('screen').width / 2 - 20,
    borderRadius: 5,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
