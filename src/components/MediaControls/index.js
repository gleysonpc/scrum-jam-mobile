import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles/theme';

export default function MediaControls() {
  const [activeMic, setActiveMic] = useState(true);
  const [activeCam, setActiveCam] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setActiveMic(!activeMic)}
        style={[styles.circle, {...(activeMic && styles.active)}]}>
        <Icon
          name={activeMic ? 'microphone' : 'microphone-off'}
          color={colors.backgroundMedium}
          size={25}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActiveCam(!activeCam)}
        style={[styles.circle, {...(activeCam && styles.active)}]}>
        <Icon
          name={activeCam ? 'camera' : 'camera-off'}
          color={colors.backgroundMedium}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    height: 40,
    width: 40,
    padding: 5,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.danger,
    marginHorizontal: 10,
  },
  active: {
    backgroundColor: colors.secondary,
  },
});
