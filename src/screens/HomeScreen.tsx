import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { ProfileImage } from '~/components/ProfileImage';
import { ScreenProps } from '../../App';

const COLORS = {
  BACKGROUND: '#FFFFFF',
  PRIMARY: '#330066', // Roxo Escuro
};

export default function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.BACKGROUND} />
      <ProfileImage />
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('LinkedIn pressed')}>
        <Text style={styles.buttonText}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log('GitHub pressed')}>
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Contact pressed')}>
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.skillsButton]} onPress={() => navigation.navigate('Skills')}>
        <Text style={[styles.buttonText, styles.skillsButtonText]}>My Skills</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: COLORS.PRIMARY,
    fontSize: 18,
    fontWeight: 'bold',
  },
  skillsButton: {
    backgroundColor: COLORS.PRIMARY,
  },
  skillsButtonText: {
    color: COLORS.BACKGROUND,
  },
});