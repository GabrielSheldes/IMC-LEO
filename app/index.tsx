import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Entender o seu IMC é um passo importante para manter o equilíbrio do corpo e da saúde. Ele serve como um indicador simples que mostra se o seu peso está dentro do recomendado, ajudando a identificar possíveis excessos ou deficiências. Com base nisso, é possível ajustar hábitos alimentares, rotina de exercícios e procurar orientação profissional quando necessário. Saber o IMC é, portanto, uma forma de cuidar de si mesmo de maneira mais informada e preventiva.
</Text>
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
    borderRadius: 16,
    width: '70%',
    height: '35%',
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
    