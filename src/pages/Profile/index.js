import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors, components} from '../../styles/theme';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={components.label}>Informe seu nome</Text>
        <TextInput style={components.input} selectionColor={colors.secondary} />
        <TouchableOpacity style={components.button}>
          <Text style={components.buttonText}>Confirmar</Text>
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
