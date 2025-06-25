import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PurpleButton } from './components/PurpleButton';

export default function CadastroScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!res.canceled) {
      setImage(res.assets[0].uri);
    }
  };

  const removerFoto = () => {
    setImage(null);
  };

  const handleCriarConta = () => {
    console.log('Conta criada com os dados:', { nome, email, senha, image });
  };

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fbeaff" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
      

        <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>Selecionar foto</Text>
            </View>
          )}
        </TouchableOpacity>

        {image && (
          <TouchableOpacity onPress={removerFoto}>
            <Text style={styles.removePhoto}>Remover foto</Text>
          </TouchableOpacity>
        )}

        <TextInput
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
        />

        <PurpleButton title="Criar Conta" onPress={handleCriarConta} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#9EECFF',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 500,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 24,
  },
  imageWrapper: {
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#6a0dad',
    borderRadius: 100,
    padding: 5,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  placeholder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontSize: 14,
  },
  removePhoto: {
    color: '#706c6c',
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
