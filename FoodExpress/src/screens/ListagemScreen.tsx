import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

interface Produto {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
  descricao: string;
}

export default function ListagemScreen() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const lista: Produto[] = [];
      querySnapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() } as Produto);
      });
      setProdutos(lista);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os produtos.');
    }
  }

async function alterarPreco(id: string, precoAtual: number) {
  const novoPrecoTexto = window.prompt('Digite o novo preço (maior que zero):', String(precoAtual));
  if (novoPrecoTexto === null) return;
  const novoPreco = Number(novoPrecoTexto);
  if (isNaN(novoPreco) || novoPreco <= 0) {
    window.alert('Erro: Preço inválido! Deve ser maior que zero.');
    return;
  }
  try {
    await updateDoc(doc(db, 'products', id), { preco: novoPreco });
    window.alert('Sucesso: Preço atualizado!');
    carregarProdutos();
  } catch (error) {
    console.error(error);
    window.alert('Erro: Não foi possível atualizar o preço.');
  }
}

async function removerProduto(id: string, nome: string) {
  const confirmado = window.confirm(`Remover "${nome}" permanentemente?`);
  if (!confirmado) return;
  try {
    await deleteDoc(doc(db, 'products', id));
    window.alert('Produto excluído.');
    carregarProdutos();
  } catch (error) {
    window.alert('Erro ao remover.');
  }
}

  const renderItem = ({ item }: { item: Produto }) => (
    <View style={styles.item}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
      <Text style={styles.categoria}>Categoria: {item.categoria}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <View style={styles.botoes}>
        <Button title="Editar Preço" onPress={() => alterarPreco(item.id, item.preco)} />
        <Button title="Remover" color="red" onPress={() => removerProduto(item.id, item.nome)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>Nenhum produto cadastrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { borderBottomWidth: 1, paddingVertical: 10 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  preco: { fontSize: 16, color: 'green' },
  categoria: { fontSize: 14, color: '#555' },
  descricao: { fontSize: 14, color: '#777' },
  botoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
});