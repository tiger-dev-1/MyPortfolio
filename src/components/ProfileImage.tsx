import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const COLORS = {
  PRIMARY: '#330066', // Roxo Escuro
};

export const ProfileImage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholderText}>Sua Foto Aqui</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 75, // Metade da altura/largura para formar um círculo
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: COLORS.PRIMARY,
    marginBottom: 30,
  },
  placeholderText: {
    color: '#888',
  },
});