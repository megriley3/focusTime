import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import {spacing, fontSizes} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject, "subject");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textContainer}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        </View>
        <View style= {styles.button}>
        <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: spacing.md
  },
  textContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    padding: spacing.lg,
    alignItems: 'flex-start',
    flexDirection: 'row',
    
  },
});