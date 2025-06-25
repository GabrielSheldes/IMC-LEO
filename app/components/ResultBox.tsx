import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ResultBox = ({ value }: { value: number }) => {
  const status =
    value < 18.5
      ? 'Abaixo do peso'
      : value < 25
      ? 'Peso normal'
      : value < 30
      ? 'Sobrepeso'
      : 'Obesidade';

  return (
    <View style={styles.box}>
      <Text style={styles.title}>IMC: {value.toFixed(2)}</Text>
      <Text style={styles.subtitle}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#60cae8',
    padding: 30,
    borderRadius: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0b2b33',
  },
  subtitle: {
    fontSize: 16,
    color: '#0b2b33',
    fontWeight: 'bold'
  },
});
