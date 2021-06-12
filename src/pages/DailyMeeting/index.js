import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';
import VideoCard from '../../components/VideoCard';
import MediaControls from '../../components/MediaControls';

export default function DailyMeeting() {
  return (
    <View style={styles.container}>
      <View style={styles.cardList}>
        <VideoCard />
        <VideoCard />
      </View>
      <MediaControls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundMedium,
  },
  cardList: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
  },
});
