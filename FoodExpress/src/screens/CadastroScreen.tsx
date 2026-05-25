import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  Text
} from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('Pizzas');
  const [descricao, setDescricao] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const opcoesCategoria = ['Pizzas', 'Bebidas', 'Lanches'];

async function handleCadastro() {
  console.log("1. Botão clicado");
  console.log("Nome:", nome, "Preço:", preco, "Descrição:", descricao);

  if (nome.trim() === '' || preco.trim() === '' || descricao.trim() === '') {
    console.log("2. Campos vazios detectados");
    Alert.alert('Erro', 'Preencha todos os campos.');
    return;
  }
  const precoNumerico = Number(preco);
  console.log("3. Preço numérico:", precoNumerico);
  if (precoNumerico <= 0 || isNaN(precoNumerico)) {
    console.log("4. Preço inválido");
    Alert.alert('Erro', 'Preço inválido! Digite um número maior que zero.');
    return;
  }
  try {
    console.log("5. Tentando salvar no Firebase...");
    await addDoc(collection(db, 'products'), {
      nome: nome.trim(),
      preco: precoNumerico,
      categoria: categoria,
      descricao: descricao.trim(),
    });
    console.log("6. Produto salvo com sucesso!");
    Alert.alert('Sucesso', 'Produto cadastrado!');
    setNome('');
    setPreco('');
    setDescricao('');
  } catch (error) {
    console.error("7. Erro ao salvar:", error);
    Alert.alert('Erro', 'Não foi possível salvar o produto.');
  }
}

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço (ex: 29.90)"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      {/* Botão que abre o modal de categorias */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.input}>
        <Text style={styles.textoSeletor}>Categoria: {categoria}</Text>
      </TouchableOpacity>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição / Ingredientes"
        value={descricao}
        onChangeText={setDescricao}
        multiline
        numberOfLines={3}
      />

      <Button title="Cadastrar Produto" onPress={handleCadastro} />

      {/* Modal para escolher a categoria */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {opcoesCategoria.map((opcao) => (
              <TouchableOpacity
                key={opcao}
                onPress={() => {
                  setCategoria(opcao);
                  setModalVisible(false);
                }}
                style={styles.opcaoModal}
              >
                <Text style={styles.opcaoTexto}>{opcao}</Text>
              </TouchableOpacity>
            ))}
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  textArea: { height: 80, textAlignVertical: 'top' },
  textoSeletor: { fontSize: 16, color: '#333' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  opcaoModal: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  opcaoTexto: {
    fontSize: 18,
    textAlign: 'center',
  },
});