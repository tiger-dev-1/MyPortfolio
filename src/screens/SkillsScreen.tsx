import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { ProfileImage } from '~/components/ProfileImage';
import { Star } from '~/components/Star';
import { ScreenProps } from '../../App';

const COLORS = {
  BACKGROUND: '#FFFFFF',
  PRIMARY: '#330066', // Roxo Escuro
  TEXT: '#000000',
};

const skills = [
  { name: 'Node.JS', rating: 4 },
  { name: 'React Native', rating: 4 },
  { name: 'Typescript', rating: 3 },
];

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <View style={styles.starContainer}>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </View>
  );
};

export default function SkillsScreen({ navigation }: ScreenProps<'Skills'>) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.BACKGROUND} />
      <ProfileImage />

      <View style={styles.skillsList}>
        {skills.map((skill) => (
          <View key={skill.name} style={styles.skillItem}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <StarRating rating={skill.rating} />
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Home</Text>
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
  skillsList: {
    width: '90%',
    marginBottom: 30,
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  skillName: {
    fontSize: 20,
    color: COLORS.TEXT,
    fontWeight: '500',
  },
  starContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.PRIMARY,
    fontSize: 18,
    fontWeight: 'bold',
  },
});