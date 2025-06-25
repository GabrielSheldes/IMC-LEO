import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { PurpleButton } from './components/PurpleButton';
import { ResultBox } from './components/ResultBox';

export default function ImcScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularIMC = () => {
    const pesoNum = Number(peso.replace(',', '.'));
    const alturaNum = Number(altura.replace(',', '.'));
    if (!pesoNum || !alturaNum) return;

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(imc);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Calcule seu IMC</Text>
        <TextInput
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
          style={styles.input}
        />
        <TextInput
          placeholder="Altura (m)"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
          style={styles.input}
        />
        <PurpleButton title="Calcular IMC" onPress={calcularIMC} />
        {resultado !== null && <ResultBox value={resultado} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9EECFF',
    padding: 20,
  },
  card: {
    backgroundColor: '#0b2b33',
    padding: 24,
    borderRadius: 20,
    width: '90%',
    elevation: 4,
    shadowColor: '#012b36',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    color: '#e8e8e8',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fafafa',
  },
});
