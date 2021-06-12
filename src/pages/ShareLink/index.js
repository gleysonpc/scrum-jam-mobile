import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors, components} from '../../styles/theme';

export default function ShareLink() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={components.label}>Compartilhar link da sala</Text>
        <TextInput
          value="https://scrumjam.com/sala15"
          style={components.input}
          selectionColor={colors.secondary}
          editable={false}
        />
        <TouchableOpacity style={components.button}>
          <Text style={components.buttonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundMedium,
    alignItems: 'center',
  },
  form: {
    width: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
